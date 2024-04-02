'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OpeningText = () => {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    // Animation for the E
    gsap.timeline()
    .to('#line', {
      height: '100%',
      ease: "circ.inOut",
      duration: 0.5
    })
    .to('#line', {
      x: '+=180',
      ease: "circ.inOut",
      duration: 0.35
    })
    .to('#line', {
      x: '-=180',
      ease: "circ.inOut",
      duration: 0.35
    })
  })


  return (
    <div className="opening-text-container">
        <div className="opening-text-line" id="line"></div>
        <p>Aspiring <br/><span className="green-text">Web <br/>Developer</span></p>
    </div>
  )
}

export default OpeningText