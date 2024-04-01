'use client'
import React from 'react'; // Import React
import Header from '../Components/Header'
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

export default function Home() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(MotionPathPlugin) 
  const container = useRef()

  useGSAP(() => {
    gsap.to('#name-1', {
      motionPath: {
        path: ["#path", '#path2'],
        align: ["#path", '#path2'],
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    transformOrigin: "50% 50%",
    duration: 1,
    ease: "power1.inOut",})
  })

  return (
    <main>
  <Header page="home"></Header>
  <section className='landing-section'>
    <h1>
      <p id='name-1'>E</p>
      <p id='name-2'>T</p>
      <p className='text-background'>H</p>
      <p id='name-3'>A</p>
      <p id='name-4'>N</p>
    </h1>
    <img src="/images/main-shape.svg" alt="main landing shape" height={175} width={175} className='main-shape'/>
    <svg id="e7huyrD0CVI1" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <path d="M150,39.447421Q35.597549,39.44742,35.597549,150" transform="translate(0 0.000001)" fill="none" stroke="#3f5787" strokeWidth="0.6" id='path2'/>
      <path d="M150,39.447422L150,150" transform="matrix(0-1 1 0-3.849873 300)" fill="none" stroke="#3f5787" strokeWidth="0.6" id='path' className='path'/>
    </svg>
  </section>
</main>

  );
}
