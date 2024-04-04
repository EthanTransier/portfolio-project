'use client'
import Header from '../Components/Header'
import OpeningText from '../Components/OpeningText';
import SocialMedia from '../Components/SocialMedia'
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

export default function Home() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(MotionPathPlugin) 

  useGSAP(() => {
    // Animation for the E
    gsap.timeline()
    .to('#name-1', {
        x: '+=-350',
        ease: "circ.inOut",
        duration: 0.35
    })
    .to('#name-1', {
        x: '+=350',
        y: -350,
        delay: 0.15,
        ease: "circ.inOut",
        duration: 0.4    
      })
    // Animation for the T
    gsap.timeline()
    .to('#name-2', {
        x: '+=-175',
        ease: "circ.inOut",
        duration: 0.35
    })
    .to('#name-2', {
        x: '+=175',
        ease: "circ.inOut",
        y: -175,
        delay: 0.15,
        duration: 0.4
    })
    // Animation for the A
    gsap.timeline()
    .to('#name-3', {
        x: '+=175',
        ease: "circ.inOut",
        duration: 0.35
    })
    .to('#name-3', {
        x: '-=175',
        y: 175,
        delay: 0.15,
        ease: "circ.inOut",
        duration: 0.4
    })
    // Animation for the N
    gsap.timeline()
    .to('#name-4', {
        x: '+=350',
        ease: "circ.inOut",
        duration: 0.35
    })
    .to('#name-4', {
        x: '+-350',
        y: 350,
        delay: 0.15,
        ease: "circ.inOut",
        duration: 0.4    
      })
    // Animation for the main shape
    gsap.timeline({delay: 0.5})
    .to('#main-shape', {
      rotate: '+=90deg',
      duration: 0.3
    })
})

  return (
    <main>
      <Header page="home"></Header>
      <section className='landing-section'>
        <OpeningText></OpeningText>
        <h1>
          <p id='name-1'>E</p>
          <p id='name-2'>T</p>
          <p className='text-background'>H</p>
          <p id='name-3'>A</p>
          <p id='name-4'>N</p>
        </h1>
        <img src="/images/main-shape.svg" alt="main landing shape" height={175} width={175} className='main-shape' id='main-shape'/>
        <SocialMedia></SocialMedia>
      </section>
    </main>
  );
}