import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useEffect, useRef} from 'react';
import anime from "animejs";
import Link from 'next/link'

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

    const test = useRef(0)

    useEffect(() => {
        // anime({
        //     targets: '.animate-button-2',
        //     strokeDashoffset: [anime.setDashoffset, 700],
        //     easing: 'easeInOutSine',
        //     duration: 1500,
        //     // delay: 1100
        // });
        console.log(test.current.getTotalLength())
    }, []);

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
            <Link href={'/about'} className='button-container'>
                <p>Discover Me</p>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="321" height="56" viewBox="0 0 321 56" className='base-button button'>
                    <rect x="1.5" y="1.5" width="318" height="53" rx="27" ry="27" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="3"/>
                </svg>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="321" height="56" viewBox="0 0 321 56" className='animate-button-1 button'>
                    <rect x="1.5" y="1.5" width="318" height="53" rx="27" ry="27" fill="none" stroke="#1b998b" stroke-miterlimit="10" stroke-width="3" ref={test}/>
                </svg>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="321" height="56" viewBox="0 0 321 56" className='animate-button-2 button'>
                    <rect x="1.5" y="1.5" width="318" height="53" rx="27" ry="27" fill="none" stroke="#1b998b" stroke-miterlimit="10" stroke-width="3"/>
                </svg>
            </Link>
            
        </div>
    </div>
  )
}

export default WordScroller