import {useState, useRef} from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Timeline = () => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const infoContainer = useRef(0)

    function open(item){
        if(!first){
            gsap.timeline()
            .to(`#${item}`, {
                width: '60%',
                ease: "circ.inOut",
                duration: 0.15
            })
            gsap.timeline()
            .to(`#${item}`, {
                marginBottom: infoContainer.current.getBoundingClientRect().height + 100,
                ease: "circ.inOut",
                duration: 0.25
            })
            gsap.timeline()
            .to(`#${item}-info`, {
                y: `+=${infoContainer.current.getBoundingClientRect().height}`,
                zIndex: '3',
                ease: "circ.inOut",
                duration: 0.35
            })
        }else{
            gsap.timeline()
            .to(`#${item}`, {
                width: '0%',
                ease: "circ.inOut",
                duration: 0.15
            })
            gsap.timeline()
            .to(`#${item}`, {
                marginBottom: 0,
                ease: "circ.inOut",
                duration: 0.25
            })
            gsap.timeline()
            .to(`#${item}-info`, {
                y: `-=${infoContainer.current.getBoundingClientRect().height}`,
                zIndex: '-1',
                ease: "circ.inOut",
                duration: 0.25
            })
        }
        setFirst(!first)
    }
    function enter(item){
        gsap.timeline()
        .to(`#${item}`, {
            width: '60%',
            ease: "power1.inOut",
            duration: 0.25
        })
    }
    function leave(item){
        gsap.timeline()
        .to(`#${item}`, {
            width: '0%',
            ease: "power1.inOut",
            duration: 0.25
        })
    }
  return (
    <div className='timeline-container'>
        <h1 onClick={() => open('first')} onMouseEnter={() => enter('first')} onMouseLeave={() => leave('first')}>20<span>22</span></h1>
        <div className='white-bottom' id='first'></div>
        <section className='timeline-info-container' ref={infoContainer} id='first-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p>OFFICER WORK CONT</p>
                <p>PROJECTS</p>
                <h3>FBLA</h3>
                <p>WEB DESIGN</p>
                <p>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p>VOLUNTEER WORK</p>
                <p className='red-text'>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2>6 WEEK INTERNSHIP</h2>
                <p>volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in </p>
            </div>
        </section>
        <h1 onClick={() => open('second')} onMouseEnter={() => enter('second')} onMouseLeave={() => leave('second')}>20<span>23</span></h1>
        <div className='white-bottom' id='second'></div>
        <section className='timeline-info-container' ref={infoContainer} id='second-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p>OFFICER WORK CONT</p>
                <p>PROJECTS</p>
                <h3>FBLA</h3>
                <p>WEB DESIGN</p>
                <p>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p>VOLUNTEER WORK</p>
                <p className='red-text'>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2>6 WEEK INTERNSHIP</h2>
                <p>volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in </p>
            </div>
        </section>
        <h1 id='third-title' onClick={() => open('third')} onMouseEnter={() => enter('third')} onMouseLeave={() => leave('third')}>20<span>24</span></h1>
        <div className='white-bottom' id='third'></div>
        <section className='timeline-info-container' ref={infoContainer} id='third-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p>OFFICER WORK CONT</p>
                <p>PROJECTS</p>
                <h3>FBLA</h3>
                <p>WEB DESIGN</p>
                <p>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p>VOLUNTEER WORK</p>
                <p className='red-text'>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2>6 WEEK INTERNSHIP</h2>
                <p>volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in </p>
            </div>
        </section>
    </div>
  )
}

export default Timeline