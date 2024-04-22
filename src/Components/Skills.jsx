import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
// import './styles.css'; // Import your CSS file

const Box = ({text}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const box = {
      w: 140,
      h: 80,
      body: Matter.Bodies.rectangle(150, 0, 140, 80),
      elem: boxRef.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const container = boxRef.current.parentElement;
    const containerBounds = container.getBoundingClientRect();

    // Create ground
    // const ground = Matter.Bodies.rectangle(containerBounds.width / 2, containerBounds.height - 60, containerBounds.width, 120, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: '#8c8c8c' // Set the fill color of the ground
    //   }
    // });

    // Create walls
    const leftWall = Matter.Bodies.rectangle(0, containerBounds.height / 2, 120, containerBounds.height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(containerBounds.width, containerBounds.height / 2, 120, containerBounds.height, { isStatic: true });
    const topWall = Matter.Bodies.rectangle(containerBounds.width / 2, 0, containerBounds.width, 120, { isStatic: true });
    const bottomWall = Matter.Bodies.rectangle(containerBounds.width / 2, containerBounds.height, containerBounds.width, 120, { isStatic: true });

    // Adjust the bounds to restrict movement within the walls
const mouseConstraint = Matter.MouseConstraint.create(engine, {
  element: container,
  constraint: {
    render: { visible: false },
    // Set bounds to restrict movement within the area bounded by the walls
    bounds: {
      min: { x: 120, y: 120 }, // Set min bounds to the top-left corner of the walls
      max: { x: containerBounds.width - 120, y: containerBounds.height - 120 } // Set max bounds to the bottom-right corner of the walls
    }
  }
});

    Matter.Composite.add(engine.world, [box.body, leftWall, rightWall, topWall, bottomWall, mouseConstraint]);

    const rerender = () => {
      box.render();
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    };

    rerender();

    return () => {
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div id="box" ref={boxRef}>
      <h1>{text}</h1>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container">
      <Box text={"HTML"}/>
      <Box text={"CSS"}/>
      <Box text={"JAVASCRIPT"}/>
      <div className="left-wall"></div>
      <div className="right-wall"></div>
      <div className="top-wall"></div>
      <div className="ground"></div>
    </div>
  );
};

export default Skills;
