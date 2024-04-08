import {useState, useRef, useEffect} from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Timeline = () => {
    const [firstState, setFirstState] = useState(false)
    const [secondState, setSecondState] = useState(false)
    const [thirdState, setThirdState] = useState(false)

    const infoContainerFirst = useRef(0)
    const infoContainerSecond = useRef(0)
    const infoContainerThird = useRef(0)

    const firstInfo1 = useRef(0)
    const firstInfo2 = useRef(0)
    const firstInfo3 = useRef(0)
    const firstInfo4 = useRef(0)
    const firstInfo5 = useRef(0)
    const firstInfo6 = useRef(0)

    const firstTitles = [firstInfo1, firstInfo2, firstInfo3, firstInfo4, firstInfo5, firstInfo6]

    function open(item, infoContainer){
        
        if(item == 'first'){
            if(!firstState){
            gsap.timeline()
            .to(`#${item}`, {
                width: '60%',
                ease: "circ.inOut",
                duration: 0.15
            })
            gsap.timeline()
            .to(`#${item}`, {
                // marginBottom: '22rem',
                ease: "circ.inOut",
                duration: 0.25
            })
            gsap.timeline()
            .to(`#${item}-info`, {
                height: `20rem`,
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
                // marginBottom: 0,
                ease: "circ.inOut",
                duration: 0.25
            })
            gsap.timeline()
            .to(`#${item}-info`, {
                height: '0',
                ease: "circ.inOut",
                duration: 0.25
            })
        }
            setFirstState(!firstState)
        }else if(item == 'second'){
            if(!secondState){
                gsap.timeline()
                .to(`#${item}`, {
                    width: '60%',
                    ease: "circ.inOut",
                    duration: 0.15
                })
                gsap.timeline()
                .to(`#${item}`, {
                    // marginBottom: '22rem',
                    ease: "circ.inOut",
                    duration: 0.25
                })
                gsap.timeline()
                .to(`#${item}-info`, {
                    height: `20rem`,
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
                    // marginBottom: 0,
                    ease: "circ.inOut",
                    duration: 0.25
                })
                gsap.timeline()
                .to(`#${item}-info`, {
                    height: '0',
                    ease: "circ.inOut",
                    duration: 0.25
                })
            }
            setSecondState(!secondState)
        }else{
            if(!thirdState){
                gsap.timeline()
                .to(`#${item}`, {
                    width: '60%',
                    ease: "circ.inOut",
                    duration: 0.15
                })
                gsap.timeline()
                .to(`#${item}`, {
                    // marginBottom: '22rem',
                    ease: "circ.inOut",
                    duration: 0.25
                })
                gsap.timeline()
                .to(`#${item}-info`, {
                    height: `20rem`,
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
                    // marginBottom: 0,
                    ease: "circ.inOut",
                    duration: 0.25
                })
                gsap.timeline()
                .to(`#${item}-info`, {
                    height: '0',
                    ease: "circ.inOut",
                    duration: 0.25
                })
            }
            setThirdState(!thirdState)
        }
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
        if((item == 'first' && !firstState) || (item == 'second' && !secondState) || (item == 'third' && !thirdState)){
            gsap.timeline()
            .to(`#${item}`, {
                width: '0%',
                ease: "power1.inOut",
                duration: 0.25
            })
        }
        
    }

    function openFirstInfo(item){
        for(let i = 0; i < firstTitles.length; i++){
            console.log(firstTitles[i].current)
            console.log(firstTitles)
            firstTitles[i].current.className = ""
        }
        firstTitles[item].current.className = 'red-text'
    }

  return (
    <div className='timeline-container'>
        <h1 onClick={() => open('first', infoContainerFirst)} onMouseEnter={() => enter('first')} onMouseLeave={() => leave('first')}>20<span>22</span></h1>
        <div className='white-bottom' id='first'></div>
        <section className='timeline-info-container' ref={infoContainerFirst} id='first-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p onClick={() => openFirstInfo(0)} ref={firstInfo1}>OFFICER WORK CONT</p>
                <p onClick={() => openFirstInfo(1)} ref={firstInfo2}>PROJECTS</p>
                <h3>FBLA</h3>
                <p onClick={() => openFirstInfo(2)} ref={firstInfo3}>WEB DESIGN</p>
                <p onClick={() => openFirstInfo(3)} ref={firstInfo4}>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p onClick={() => openFirstInfo(4)} ref={firstInfo5}>VOLUNTEER WORK</p>
                <p onClick={() => openFirstInfo(5)} ref={firstInfo6}>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2>6 WEEK INTERNSHIP</h2>
                <p>volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in </p>
            </div>
        </section>
        <h1 onClick={() => open('second', infoContainerSecond)} onMouseEnter={() => enter('second')} onMouseLeave={() => leave('second')}>20<span>23</span></h1>
        <div className='white-bottom' id='second'></div>
        <section className='timeline-info-container' ref={infoContainerSecond} id='second-info'>
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
        <h1 id='third-title' onClick={() => open('third', infoContainerThird)} onMouseEnter={() => enter('third')} onMouseLeave={() => leave('third')}>20<span>24</span></h1>
        <div className='white-bottom' id='third'></div>
        <section className='timeline-info-container' ref={infoContainerThird} id='third-info'>
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