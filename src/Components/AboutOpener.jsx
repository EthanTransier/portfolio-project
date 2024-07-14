import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AboutOpener = () => {
    const followRef = useRef(null);
    const testRef = useRef(null);
    const prevPosition = useRef({ x: 0, y: 0, time: Date.now() });
    var animation = false;
    const cursorFollowerRef = useRef(null);
    const cursorFollowerDotRef = useRef(null);
    const mouseXRef = useRef(0);
    const mouseYRef = useRef(0);
    const xpRef = useRef(0);
    const ypRef = useRef(0);
    const xpDotRef = useRef(0);
    const ypDotRef = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
        mouseXRef.current = e.pageX;
        mouseYRef.current = e.pageY;
        };

        document.addEventListener('mousemove', handleMouseMove);

        const interval1 = setInterval(() => {
        xpRef.current += (mouseXRef.current - xpRef.current) / 15;
        ypRef.current += (mouseYRef.current - ypRef.current) / 15;

        if (cursorFollowerRef.current) {
            cursorFollowerRef.current.style.left = `${xpRef.current}px`;
            cursorFollowerRef.current.style.top = `${ypRef.current}px`;
        }
        }, 20);

        const interval2 = setInterval(() => {
        xpDotRef.current += (mouseXRef.current - xpDotRef.current) / 25;
        ypDotRef.current += (mouseYRef.current - ypDotRef.current) / 25;

        if (cursorFollowerDotRef.current) {
            cursorFollowerDotRef.current.style.left = `${xpDotRef.current}px`;
            cursorFollowerDotRef.current.style.top = `${ypDotRef.current}px`;
        }
        }, 20);

        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        clearInterval(interval1);
        clearInterval(interval2);
        };
    }, []);

    return (
        <section className='aboutOpener'>
            <div className='aboutTitleContainer'>
                <h1>ABOUT</h1>
                <div className="titleLinksContainer">
                    <h1>ME</h1>
                    <h5>(Ethan Transier)</h5>
                    <div className="skillsContainer">
                        <a href="#skills">Skills</a>
                        <a href="#timeline">Timeline</a>
                        <a href="#resume">Resume</a>
                    </div>
                </div>
            </div>
            <div className="following">
                <div className="follow" ref={followRef}></div>
                <div className="test" ref={testRef}></div>
            </div>
            
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg> */}
            <div ref={cursorFollowerRef} className="cursorFollower"></div>
            <div ref={cursorFollowerDotRef} className="cursorFollowerDot"></div>
             {/* <svg
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                
                style={{ position: 'absolute' }}
            >
                <defs>
                    <mask id="circleMask" width="100%" height='100%'>
                        <circle r="50" cx="0" cy="0" fill="white" ref={maskRef}/>
                    </mask>
                </defs>
                
            </svg>
            <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='follow'
                ref={followRef}
                style={{ position: 'absolute' }}  // ensure the SVG follows the pointer correctly
            >
                <circle r="150" cx="150" cy="150" fill="#1b998b" />
            </svg> */}
        </section>
    );
};

export default AboutOpener;
