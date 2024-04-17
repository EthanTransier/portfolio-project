import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedProjects = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    useGSAP(() => {
        gsap.to(".featured-image", {
            scrollTrigger: {
                trigger: ".featured-image",
                start: "top 60%", // Starts when the top of the trigger hits the center of the viewport
            },
            x: '20vw',
            ease: "back.inOut(1.7)",
            duration: 1
        });
        gsap.to(".projects-image", {
            scrollTrigger: {
                trigger: ".featured-image",
                start: "top 60%", // Starts when the top of the trigger hits the center of the viewport
            },
            x: '-20vw',
            ease: "back.inOut(1.7)",
            duration: 1
        });
    })


  return (
    <div className='featured-projects'>
        <Image src="/images/featured.svg" alt="featured" height={100} width={1000} className='featured-image'></Image>
        <Image src="/images/projects.svg" alt="projects" height={100} width={1000} className='projects-image'></Image>
    </div>
  )
}

export default FeaturedProjects