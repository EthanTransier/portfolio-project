import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'

const Navbar = (page) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(page.page.page)
    // keeps track of the different intervals for each word
    const [intervalIds, setIntervalIds] = useState({
        contact: null,
        projects: null,
        about: null,
        home: null
    });

    var contactRunning = false;
    var projectsRunning = false;
    var aboutRunning = false;
    var homeRunning = false;

    // refs object for the divs
    const refs = {
        contact: useRef(null),
        projects: useRef(null),
        about: useRef(null),
        home: useRef(null)
    };
    // returns random letter of alphabet
    function random() {
        return letters.split('')[Math.floor(Math.random() * 26)];
    }
    // interval function for randomly changing the letters when they are hovered on
    function changeText(ref, condition) {
        if(condition){
            console.log('mouse entered')
            console.log(ref.current.getBoundingClientRect().height)
        }else{
            console.log('mouse exited')
            console.log(ref.current.getBoundingClientRect().height)
        }
        // gets the current hovered word
        const text = ref.current;
        // gets the actual word that the hovered item is supposed to display, the text variable has the p tags inbetween each letter
        const realText = text.getAttribute('data-text');
        // resets the iteration everytime the user hovers
        let iteration = 0;
        // will end whatever interval is currently running, used when the user moves their mouse OFF of the div, so that their aren't any conflicting animations'
        if(!condition){
            clearInterval(intervalIds[ref.current.getAttribute('data-ref')]);
        }
        
        // sets the interval that changes the letters every 20 miliseconds, makes it look random and cool
        const intervalId = setInterval(() => {
            let result = "";
            for (let i = 0; i < realText.length; i++) {
                if (i < iteration) {
                    // if the iteration has gotten to I, which is after the letters have randomized for a few cycles, then it will show red, since the user is hovered over it. If the user is not hovering over it, and it is the end animation, the text will be white
                    result += `<p class="${condition ? 'red-text' : ''}">${realText[i]}</p>`;
                } else {
                    result += `<p class="${condition ? '' : 'red-text'}">${random()}</p>`;
                }
            }
            text.innerHTML = result;
            if (iteration >= realText.length) {
                clearInterval(intervalId);
            }
            iteration += 1 / 3;
            // console.log(iteration);
        }, 20);
        // This function updates the interval ids with the id of the interval associated with a specific div, identified by the data-ref attribute. It does this by creating a nhew object with the updated interval ID.
        setIntervalIds(prevIds => ({
            ...prevIds,
            [ref.current.getAttribute('data-ref')]: intervalId
        }));
    }

    return (
        <nav>
            <div className="top-white-line"></div>
            <div className="links-container">
                
                    <Link href="/contact" className={(page.page.page == 'contact') ? 'current-link' : ''}>
                        <div className='cover' onMouseEnter={() => changeText(refs.contact, true)} onMouseLeave={() => changeText(refs.contact, false)} data-ref="contact"></div>
                        <div className="white-dot"></div>
                        <img
                            src="/images/diamond.svg"
                            width={21}
                            height={21}
                            alt="Diamond"
                        />
                        <h5 ref={refs.contact} data-text="CONTACT">
                            <p>C</p>
                            <p>O</p>
                            <p>N</p>
                            <p>T</p>
                            <p>A</p>
                            <p>C</p>
                            <p>T</p>
                        </h5>
                    </Link>
                    <Link href="/projects" className={`${(page.page.page == 'projects') ? 'current-link' : ''}`}>
                        <div className='cover' onMouseEnter={() => changeText(refs.projects, true)} onMouseLeave={() => changeText(refs.projects, false)} data-ref="projects"></div>
                        <div className="white-dot"></div>
                        <img
                            src="/images/diamond.svg"
                            width={21}
                            height={21}
                            alt="Diamond"
                        />
                        <h5 ref={refs.projects} data-text="PROJECTS">
                            <p>P</p>
                            <p>R</p>
                            <p>O</p>
                            <p>J</p>
                            <p>E</p>
                            <p>C</p>
                            <p>T</p>
                            <p>S</p>
                        </h5>
                    </Link>
                    <Link href="/about" className={(page.page.page == 'about') ? 'current-link' : ''}>
                        <div className='cover' onMouseEnter={() => changeText(refs.about, true)} onMouseLeave={() => changeText(refs.about, false)} data-ref="about"></div>
                        <div className="white-dot"></div>
                        <img
                            src="/images/diamond.svg"
                            width={21}
                            height={21}
                            alt="Diamond"
                        />
                        <h5 ref={refs.about} data-text="ABOUT">
                            <p>A</p>
                            <p>B</p>
                            <p>O</p>
                            <p>U</p>
                            <p>T</p>
                        </h5>
                    </Link>
                    <Link href="/" className={(page.page.page == 'home') ? 'current-link' : ''}>
                        <div className='cover' onMouseEnter={() => changeText(refs.home, true)} onMouseLeave={() => changeText(refs.home, false)} data-ref="home"></div>
                        <div className="white-dot"></div>
                        <img
                            src="/images/diamond.svg"
                            width={21}
                            height={21}
                            alt="Diamond"
                        />
                        <h5 ref={refs.home} data-text="HOME">
                            <p>H</p>
                            <p>O</p>
                            <p>M</p>
                            <p>E</p>
                        </h5>
                    </Link>
            </div>
        </nav>
    );
}

export default Navbar;
