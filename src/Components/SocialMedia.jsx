import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useState, useRef} from 'react'


const SocialMedia = () => {
    const container1 = useRef(0)
    const container2 = useRef(0)
    const container3 = useRef(0)
    gsap.registerPlugin(useGSAP)
    // Event Listeners for the shape behind the social media logos
    // INSTAGRAM
    const handleMouseEnter1 = (e) => {
        const mouseX = container1.current.getBoundingClientRect().x
        const mouseY = container1.current.getBoundingClientRect().y
        gsap.timeline()
        .to('#shape-1', {
            x: `${e.clientX - mouseX - (35/2)}`,
            y: `${e.clientY - mouseY - (35/2)}`,
            duration: 0.00001
        })
        .to('#shape-1', {
            width: 140,
            height: 140,
            ease: "circ.inOut",
            duration: 0.25
        })
    };

    const handleMouseLeave1 = () => {
        gsap.timeline()
        .to('#shape-1', {
            width: 0,
            height: 0,
            ease: "circ.inOut",
            duration: 0.5
        })
    };
    // GITHUB
    const handleMouseEnter2 = (e) => {
        const mouseX = container2.current.getBoundingClientRect().x
        const mouseY = container2.current.getBoundingClientRect().y
        gsap.timeline()
        .to('#shape-2', {
            x: `${e.clientX - mouseX - (35/2)}`,
            y: `${e.clientY - mouseY - (35/2)}`,
            duration: 0.00001
        })
        .to('#shape-2', {
            width: 140,
            height: 140,
            ease: "circ.inOut",
            duration: 0.5
        })
    };

    const handleMouseLeave2 = () => {
        gsap.timeline()
        .to('#shape-2', {
            width: 0,
            height: 0,
            ease: "circ.inOut",
            duration: 0.25
        })
    };

    // LINKED IN
    const handleMouseEnter3 = (e) => {
        const mouseX = container3.current.getBoundingClientRect().x
        const mouseY = container3.current.getBoundingClientRect().y
        gsap.timeline()
        .to('#shape-3', {
            x: `${e.clientX - mouseX - (35/2)}`,
            y: `${e.clientY - mouseY - (35/2)}`,
            duration: 0.00001
        })
        .to('#shape-3', {
            width: 140,
            height: 140,
            ease: "circ.inOut",
            duration: 0.5
        })
    };

    const handleMouseLeave3 = () => {
        gsap.timeline()
        .to('#shape-3', {
            width: 0,
            height: 0,
            ease: "circ.inOut",
            duration: 0.25
        })
    };
  

  return (
    <div className='social-media-container'>
        <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} ref={container1}>
            <Image src='/images/instagram.svg' width={40} height={40} alt='Instagram logo'/>
            <div id='shape-1' className='shape'></div>
        </div>
        
        <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} ref={container2}>
            <Image src='/images/github.svg' width={40} height={40} alt='Github logo'/>
            <div id='shape-2' className='shape'></div>
        </div>
        <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} ref={container3}>
            <Image src='/images/linkedin.svg' width={40} height={40} alt='LinkedIn logo'/>
            <div id='shape-3' className='shape'></div>
        </div>
    </div>
  )
}

export default SocialMedia