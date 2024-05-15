import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
// import './styles.css'; // Import your CSS file

const Box = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const polygonRef1 = useRef(null);
  const polygonRef2 = useRef(null);
  const polygonRef3 = useRef(null);
  const polygonRef4 = useRef(null);

  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const circleRef3 = useRef(null);

  const testCircle = useRef(null)
  const testBox = useRef(null)
  const testPoly = useRef(null)
  

  useEffect(() => {
    console.log(testCircle.current.getBoundingClientRect().width)
    const engine = Matter.Engine.create();
    const container = boxRef1.current.parentElement;
    const containerBounds = container.getBoundingClientRect();

    const box1 = {
      w: testBox.current.getBoundingClientRect().width,
      h: testBox.current.getBoundingClientRect().height,
      body: Matter.Bodies.rectangle(180, 0, testBox.current.getBoundingClientRect().width, testBox.current.getBoundingClientRect().height),
      elem: boxRef1.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const box2 = {
      w: testBox.current.getBoundingClientRect().width,
      h: testBox.current.getBoundingClientRect().height,
      body: Matter.Bodies.rectangle(220, 0, testBox.current.getBoundingClientRect().width, testBox.current.getBoundingClientRect().height),
      elem: boxRef2.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const box3 = {
      w: testBox.current.getBoundingClientRect().width,
      h: testBox.current.getBoundingClientRect().height,
      body: Matter.Bodies.rectangle(220, 0, testBox.current.getBoundingClientRect().width, testBox.current.getBoundingClientRect().height),
      elem: boxRef3.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        this.body.render.fillStyle = "red"
      },
    };
    const polygon1 = {
      w: testPoly.current.getBoundingClientRect().width,
      h: testPoly.current.getBoundingClientRect().width,
      body: Matter.Bodies.polygon(360, 0, 8, testPoly.current.getBoundingClientRect().width/2),
      elem: polygonRef1.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const polygon2 = {
      w: testPoly.current.getBoundingClientRect().width,
      h: testPoly.current.getBoundingClientRect().width,
      body: Matter.Bodies.polygon(360, 0, 8, testPoly.current.getBoundingClientRect().width/2),
      elem: polygonRef2.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const polygon3 = {
      w: testPoly.current.getBoundingClientRect().width,
      h: testPoly.current.getBoundingClientRect().width,
      body: Matter.Bodies.polygon(360, 0, 8, testPoly.current.getBoundingClientRect().width/2),
      elem: polygonRef3.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const polygon4 = {
      w: testPoly.current.getBoundingClientRect().width,
      h: testPoly.current.getBoundingClientRect().width,
      body: Matter.Bodies.polygon(360, 0, 8, testPoly.current.getBoundingClientRect().width/2),
      elem: polygonRef4.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const circle1 = {
      w: testCircle.current.getBoundingClientRect().width,
      h: testCircle.current.getBoundingClientRect().width,
      body: Matter.Bodies.circle(360, 0, testCircle.current.getBoundingClientRect().width/2),
      elem: circleRef1.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const circle2 = {
      w: testCircle.current.getBoundingClientRect().width,
      h: testCircle.current.getBoundingClientRect().width,
      body: Matter.Bodies.circle(360, 0, testCircle.current.getBoundingClientRect().width/2),
      elem: circleRef2.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const circle3 = {
      w: testCircle.current.getBoundingClientRect().width,
      h: testCircle.current.getBoundingClientRect().width,
      body: Matter.Bodies.circle(360, 0, testCircle.current.getBoundingClientRect().width/2),
      elem: circleRef3.current,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - this.h / 2}px`;
        this.elem.style.left = `${x - this.w / 2}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    // Create ground
    // const ground = Matter.Bodies.rectangle(containerBounds.width / 2, containerBounds.height - 60, containerBounds.width, 120, {
    //   isStatic: true,
    //   render: {
    //     fillStyle: '#8c8c8c' // Set the fill color of the ground
    //   }
    // });

    // Create walls
    const leftWall = Matter.Bodies.rectangle(0, containerBounds.height / 2, 240, containerBounds.height + 480, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(containerBounds.width, containerBounds.height / 2, 240, containerBounds.height + 480, { isStatic: true });
    const topWall = Matter.Bodies.rectangle(containerBounds.width / 2, 0, containerBounds.width + 480, 240, { isStatic: true });
    const bottomWall = Matter.Bodies.rectangle(containerBounds.width / 2, containerBounds.height, containerBounds.width, 240, { isStatic: true });

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
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    Matter.Collision.create(box1, box2, box3, polygon1, polygon2, polygon3, polygon4, circle1, circle2, circle3)
    Matter.Composite.add(engine.world, [box1.body, box2.body, box3.body, polygon1.body, polygon2.body, polygon3.body, polygon4.body, circle1.body, circle2.body, circle3.body, leftWall, rightWall, topWall, bottomWall, mouseConstraint]);

    const rerender = () => {
      box1.render();
      box2.render();
      box3.render();
      polygon1.render();
      polygon2.render();
      polygon3.render();
      polygon4.render();
      circle1.render();
      circle2.render();
      circle3.render();
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
    <>
      <div id="test-circle" ref={testCircle}></div>
      <div id="test-box" ref={testBox}></div>
      <div id="test-poly" ref={testPoly}></div>
      <div id="box" ref={boxRef1}>
        <h1>HTML</h1>
      </div>
      <div id="box" ref={boxRef2}>
        <h1>CSS</h1>
      </div>
      <div id="box" ref={boxRef3}>
        <h1>JAVASCRIPT</h1>
      </div>
      <div id="polygon" ref={polygonRef1}>
        <h1>SCSS</h1>
      </div>
      <div id="polygon" ref={polygonRef2}>
        <h1>NODEJS</h1>
      </div>
      <div id="polygon" ref={polygonRef3}>
        <h1>REACT</h1>
      </div>
      <div id="polygon" ref={polygonRef4}>
        <h1>NEXTJS</h1>
      </div>
      <div id="circle" ref={circleRef1}>
        <h1>LEADERSHIP</h1>
      </div>
      <div id="circle" ref={circleRef2}>
        <h1>CREATIVITY</h1>
      </div>
      <div id="circle" ref={circleRef3}>
        <h1>TEAMWORK</h1>
      </div>
    </>
    
  );
};

const Skills = () => {
  return (
    <div className="container">
      <Box/>
      <div className="left-wall"></div>
      <div className="right-wall"></div>
      <div className="top-wall"></div>
      <div className="ground"></div>
    </div>
  );
};

export default Skills;
