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
    const handleMouseEnter1 = () => {
        gsap.timeline()
        .to('#image1', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '45px',
            backgroundColor: '#1b998b'
        })
    };

    const handleMouseLeave1 = () => {
        gsap.timeline()
        .to('#image1', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '40px',
            backgroundColor: 'white'
        })
    };
    // GITHUB
    const handleMouseEnter2 = (e) => {
        gsap.timeline()
        .to('#image2', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '45px'
        })
    };

    const handleMouseLeave2 = () => {
        gsap.timeline()
        .to('#image2', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '40px'
        })
    };

    // LINKED IN
    const handleMouseEnter3 = () => {
       gsap.timeline()
        .to('#image3', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '45px'
        })
    };

    const handleMouseLeave3 = () => {
        gsap.timeline()
        .to('#image3', {
            ease: "circ.inOut",
            duration: 0.25,
            width: '40px',
        })
    };
  

  return (
    <div className='social-media-container'>
        <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <div id='image1'></div>
        </div>
        
        <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} ref={container2}>
            <Image src='/images/github.svg' width={40} height={40} alt='Github logo' id='image2'/>
        </div>
        <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} ref={container3}>
            <Image src='/images/linkedin.svg' width={40} height={40} alt='LinkedIn logo' id='image3'/>
        </div>
    </div>
  )
}

export default SocialMedia