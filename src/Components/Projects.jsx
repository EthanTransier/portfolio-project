import React, { useEffect, useRef, useState } from 'react';
// import {Draggable} from 'gsap/Draggable'
import ProjectCard from './ProjectCard'
import {motion, useMotionValue} from 'framer-motion'
// defines how far the user has to drag the cards for it to increment the position


const Projects = () => {
  const constraintRef = useRef(null)
  const [positionIndex, setPositionIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const DRAG_BUFFER = 150
  const dragX = useMotionValue(0)
  const cardsLength = 4

  const increasePosition = () => {
    if(positionIndex < cardsLength){
      setPositionIndex((pv) => pv + 1)   
    }
  }

  const decreasePosition = () => {
    if(positionIndex > 0){
      setPositionIndex((pv) => pv - 1)      
    }
  }

  const onDragStart = () => {
    setDragging(true)
  }

  const onDragEnd = () => {
    setDragging(false)

    const x = dragX.get();

    if(x <= -DRAG_BUFFER && positionIndex < cardsLength) {
      setPositionIndex((pv) => pv + 1)
    }else if(x >= DRAG_BUFFER && positionIndex > 0){
      setPositionIndex((pv) => pv - 1)
    }
  }
  const handleClick = (num) => {
    setPositionIndex(num)
  }

  return (
    <section className="projects">
      <h1 className='projects-title'>PROJECTS</h1>
      <div className="bubbles">
        {cardsLength ? (
          Array.from({ length: cardsLength + 1 }).map((_, index) => (
            <div key={index} className="bubble-container"  onClick={() => handleClick(index)}>
              <div className={`${index == positionIndex ? 'active' : ''} bubble`}></div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
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
          style={{width: `${(cardsLength + 1) * 100}vw`, display: 'flex', x: dragX}}
        >
          <ProjectCard num={0} title="EMR WEB APPLICATION" type="Current Freelancing Project" url="/images/emr.jpg" link="" link2="" increasePosition={increasePosition} decreasePosition={decreasePosition} tags={['NextJS', 'Material UI', 'Full-Stack', 'Freelance', 'Teamwork', 'Professional Application']} info={"I am currently working as a freelancer hired by West-MEC to develop an Electronic Medical Records (EMR) site for their Medical Assisting programs. This site will be used by upcoming medical professionals to practice inputting patient data, creating and billing patients, ETC. I am the front-end developer for this project, working with Material UI and NextJS to develop a clean and user-friendly UX/UI."}></ProjectCard>
          <ProjectCard title="INTERNSHIP PORTFOLIO" type="Internship" url="/images/sydney-curtis.png" link="" link2="https://scurtisphd.com/home" increasePosition={increasePosition} decreasePosition={decreasePosition} tags={['Teamwork', 'React', 'SCSS', 'Full-Stack', 'Internship', 'Client']} info={"I was hired through Work Based Learning Alliance (WBLA) as an intern for Sydney Curtis. For this internship I, alongisde a group of my peers, developed a full-stack web portfolio for Curtis. We worked hard to meet her goals, and developed it with complete customability in mind."}></ProjectCard>
          <ProjectCard title="WEB PORTFOLIO V3" type="Online Portfolio" url="/images/web-portfolio.png" link="portfolio-project" increasePosition={increasePosition} decreasePosition={decreasePosition} tags={['NextJS', 'SCSS', 'Animations', 'GSAP', 'Anime.JS', 'Responsive']} info={"This portfolio, which started as a West-MEC project, has become my online portfolio. It was architected using NextJS and SCSS, with the animations being done with GSAP, Anime.JS, and Framer Motion. This is the third and current version of my portfolio, with minimalism, clean UI, and fluid animations being the main focus points."}></ProjectCard>
          <ProjectCard title="QUIKTEK COMPUTER" type="West-MEC Project/Client" url="/images/quiktek.png" link="" link2="http://www.quiktekcomputer.com/index.html" tags={['SCSS', 'HTML', 'JavaScript','Frontend', 'Client', 'Responsive']} increasePosition={increasePosition} decreasePosition={decreasePosition} info={"For this site, I was given the project after it was initially finished to overhaul it and get it web-ready in a very short timeframe. While I did not initally create or develop this project, I did overhaul massive amounts of the code, enabling it to be responsive and meet the client's expectations."}></ProjectCard>
          <ProjectCard num={1} title="UNITY GAME" type="West-MEC Project" url="/images/game-project.png" link="unity-project" increasePosition={increasePosition} decreasePosition={decreasePosition} tags={['Unity', 'Teamwork', 'C#', 'Game Development', 'Graphic Design']} info={"In early 2024 I worked closely with a peer to develop a small Unity game quickly. This game has three unique levels, varied objectives, numerous enemies to defeat, and a fleshed-out movement system. We created custom sprites using pixel art, including animations for movements and attacks. We developed this project with no prior game development or C# knowledge."}></ProjectCard>
        </motion.div>
      </section>
    </section>
    
    
  );
};

export default Projects;
