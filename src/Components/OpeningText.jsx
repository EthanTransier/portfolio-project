'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OpeningText = () => {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    // changes the height of the line
    gsap.timeline()
    .to('#line', {
      height: '100%',
      ease: "circ.inOut",
      duration: 0.5
    })
    // Moves the line to the right and then to the left, repeat infinite
    gsap.timeline({repeat: -1, repeatDelay: 5, delay: 0.5})
    .to('#line-container', {
      paddingLeft: '+=210',
      ease: "circ.inOut",
      duration: 0.5,
      // delay: 0.5
    })
    .to('#line-container', {
      paddingLeft: '-=210',
      ease: "circ.inOut",
      duration: 0.5
    })
    // Changes the text, for the first block of text "aspiring web developer"
    gsap.timeline({repeat: -1, repeatDelay: 5.5, delay: 0.5})
    .to('#opening-text', {
      display: 'block',
      ease: "circ.inOut",
      duration: 0.5,
      delay: 0.5
    })
    .to('#opening-text', {
      display: 'none',
      ease: "circ.inOut",
      duration: 0.5,
      delay: 5.0
    })
    // Changes the text display, for the second block of text "current coding student"
    gsap.timeline({repeat: -1, repeatDelay: 5.5, delay: 6.5})
    .to('#opening-text-2', {
      display: 'block',
      ease: "circ.inOut",
      duration: 0.5,
      delay: 0.5
    })
    .to('#opening-text-2', {
      display: 'none',
      ease: "circ.inOut",
      duration: 0.5,
      delay: 5
    })
  })


  return (
    <div className="opening-text-container">
        <div className="opening-text-line-container" id="line-container">
          <div id="line" className="line"></div>
        </div>
        <p id="opening-text">Aspiring <br/><span className="green-text">Web <br/>Developer</span></p>
        <p id="opening-text-2">Current <br/><span className="green-text">Coding <br/>Student</span></p>
    </div>
  )
}

export default OpeningText