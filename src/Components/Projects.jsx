import React, { useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {Draggable} from 'gsap/Draggable'
import ProjectCard from './ProjectCard'

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create("#projects-circle", {
      type: "rotation",
      inertia: true,
      snap: function (value) {
        return Math.round(value / 90) * 90;
      },
    });
  });

  return (
    <section className="main-projects">
      <div id="projects-circle" >
        <ProjectCard num={1} title="GAME PROJECT" url="/images/game.png" link="unity-project"></ProjectCard>
        <ProjectCard num={2} title="EMR WEB APPLICATION" url="/images/emr.png" link="" link2=""></ProjectCard>
        <ProjectCard num={3} title="WEB PORTFOLIO" url="/images/web-portfolio.png" link="portfolio-project"></ProjectCard>
        <ProjectCard num={4} title="GAMEBOX PROJECT" url="/images/gamebox.jpg" link="gamebox"></ProjectCard>
        <ProjectCard num={5} title="QUIKTEK COMPUTER PROJECTS" url="/images/quiktek.png" link="" link2="http://www.quiktekcomputer.com/index.html"></ProjectCard>
        <ProjectCard num={6} title="JWT AUTH/ENCRYPT APP" url="/images/encrypt.jpg" link="jwt_auth"></ProjectCard>
        <ProjectCard num={7} title=""></ProjectCard>
        <ProjectCard num={8} title=""></ProjectCard>
        <ProjectCard num={9} title=""></ProjectCard>
        <ProjectCard num={10} title=""></ProjectCard>
        <ProjectCard num={11} title=""></ProjectCard>
        <ProjectCard num={12} title=""></ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
