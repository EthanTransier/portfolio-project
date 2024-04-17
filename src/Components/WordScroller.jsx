import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WordScroller = () => {
    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        gsap.timeline({repeat: -1})
        .to('.scroller', {
            ease: "linear",
            duration: 25,
            transform: "translateX(-100%)"
        })
    })

  return (
    <div className='word-scroller'>
        <div className="scroller-container-green">
            <div className="scroller scroller-green">&nbsp;Innovative Creative Passionate Reliable Collaborative Proactive Imaginative Flexible Dependable</div>
            <div className="scroller scroller-green">&nbsp;Innovative Creative Passionate Reliable Collaborative Proactive Imaginative Flexible Dependable</div>
        </div>
        <div className="scroller-container-red">
            <div className="scroller scroller-red">&nbsp;Intuitive Versatile Resourceful Focused Supportive Productive Organized Problem-solving Enthusiastic Dynamic</div>
            <div className="scroller scroller-red">&nbsp;Intuitive Versatile Resourceful Focused Supportive Productive Organized Problem-solving Enthusiastic Dynamic</div>
        </div>
        
        <div className="scroller-container-green">
            <div className="scroller scroller-green">&nbsp;Disciplined Adaptable Enthusiastic Visionary Self-motivated Positive Leadership</div>
            <div className="scroller scroller-green">&nbsp;Disciplined Adaptable Enthusiastic Visionary Self-motivated Positive Leadership</div>
        </div>
        <div className="scroller-button-container">
            <button className="scroller-button">Discover Me</button>
            {/* <button className="scroller-button-border">Discover Me</button> */}
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 61" className='scroller-button-svg'>
                <rect class="cls-1" x=".5" y=".5" width="20rem" height="55px" rx="27.5" ry="27.5"  fill="none" stroke="#1b998b" strokeWidth="3" strokeLinejoin="round"/>
            </svg>
        </div>
    </div>
  )
}

export default WordScroller