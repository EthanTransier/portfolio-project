import React, { useEffect, useRef, useState } from 'react';
// import {Draggable} from 'gsap/Draggable'
import ProjectCard from './ProjectCard'
import {motion, useMotionValue} from 'framer-motion'
// defines how far the user has to drag the cards for it to increment the position
const DRAG_BUFFER = 150

const Projects = () => {
  const constraintRef = useRef(null)
  const [positionIndex, setPositionIndex] = useState(0)
  const [dragging, setDragging] = useState(false)

  const dragX = useMotionValue(0)

  const onDragStart = () => {
    setDragging(true)
  }

  const onDragEnd = () => {
    setDragging(false)

    const x = dragX.get();

    if(x <= -DRAG_BUFFER && positionIndex < 2) {
      setPositionIndex((pv) => pv + 1)
    }else if(x >= DRAG_BUFFER && positionIndex > 0){
      setPositionIndex((pv) => pv - 1)
    }
  }

  return (
    <section className="main-projects" ref={constraintRef}>
      <motion.div
        drag="x" 
        dragConstraints={{
          left: 0,
          right: 0
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        animate={{
          translateX: `-${positionIndex * 100}vw`
        }} 
        style={{width: '300vw', display: 'flex', x: dragX}}
      >
        <ProjectCard num={1} title="GAME PROJECT" url="/images/game-project.png" link="unity-project"></ProjectCard>
        <ProjectCard num={2} title="EMR WEB APPLICATION" url="/images/emr.png" link="" link2=""></ProjectCard>
        <ProjectCard num={3} title="WEB PORTFOLIO" url="/images/web-portfolio.png" link="portfolio-project"></ProjectCard>
      </motion.div>
    </section>
    
  );
};

export default Projects;
