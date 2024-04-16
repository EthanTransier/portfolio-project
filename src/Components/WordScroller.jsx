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
            <button className="scroller-button-border">Discover Me</button>
        </div>
    </div>
  )
}

export default WordScroller