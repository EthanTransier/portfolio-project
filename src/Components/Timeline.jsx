import {useState, useRef, useEffect} from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Timeline = () => {
    // const phrases = [
    //     'Neo,',
    //     'sooner or later',
    //     "you're going to realize",
    //     'just as I did',
    //     "that there's a difference",
    //     'between knowing the path',
    //     'and walking the path'
    // ];
    // States for if the years are open, 2022, 2023, and 2024
    const [firstState, setFirstState] = useState(false)
    const [secondState, setSecondState] = useState(false)
    const [thirdState, setThirdState] = useState(false)

    // info for the each years, with the titles on the left, and the info that changes on the right
    const infoContainerFirst = useRef(0)
    const infoContainerSecond = useRef(0)
    const infoContainerThird = useRef(0)

    // Text for the first year (2022), firstText is the actual content, firstTextTitle is the title of the content, right side
    const firstText = useRef(0)
    const firstTextTitle = useRef(0)

    // The different titles for the first year (2022), they are on the left
    const firstInfo1 = useRef(0)
    const firstInfo2 = useRef(0)
    const firstInfo3 = useRef(0)
    const firstInfo4 = useRef(0)
    const firstInfo5 = useRef(0)
    const firstInfo6 = useRef(0)
    // Array for holding the titles
    const firstTitles = [firstInfo1, firstInfo2, firstInfo3, firstInfo4, firstInfo5, firstInfo6]

    function open(item, width){
        
        if(item == 'first'){
            if(!firstState){
            gsap.timeline()
            .to(`#${item}`, {
                width: width,
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
                    width: width,
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
                    width: width,
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
    function enter(item, width){
        gsap.timeline()
        .to(`#${item}`, {
            width: width,
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
        gsap.timeline()
            .to(`#first-text-container`, {
                translateY: `${-100 * item}%`,
                ease: "circ.inOut",
                duration: 0.35
            })
        firstTextTitle.current.innerHTML = firstTitles[item].current.innerHTML
    }

  return (
    <div className='timeline-container'>
        <h1 onClick={() => open('first', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('first', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('first')}>20<span>22</span></h1>
        <div className='white-bottom' id='first'></div>
        <section className='timeline-info-container' ref={infoContainerFirst} id='first-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p onClick={() => openFirstInfo(0)} ref={firstInfo1} className='red-text'>OFFICER WORK CONT</p>
                <p onClick={() => openFirstInfo(1)} ref={firstInfo2}>PROJECTS</p>
                <h3>FBLA</h3>
                <p onClick={() => openFirstInfo(2)} ref={firstInfo3}>WEB DESIGN</p>
                <p onClick={() => openFirstInfo(3)} ref={firstInfo4}>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p onClick={() => openFirstInfo(4)} ref={firstInfo5}>VOLUNTEER WORK</p>
                <p onClick={() => openFirstInfo(5)} ref={firstInfo6}>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2 ref={firstTextTitle}>OFFICER WORK CONT</h2>
                <div ref={firstText} className='timeline-text-container' id='first-text-container'>
                        <div>During my second semester at West-MEC as an FBLA Officer, I worked closely with my team to plan events like FBLA Regionals and State, emphasizing teamwork and communication. I also played a key role in organizing fundraisers to support our coding program.</div>
                        <div>This semester at West-MEC, I completed a Unity game project and began work on an EMR Web Application for the Medical Assisting programs. While honing my skills in React and Next.js, I delved into both frontend and backend web development.</div>
                        <div>At FBLA State, I competed in the Web Design Competition and secured 6th place in the state, earning a spot for Nationals. My project was a Gala Website designed for a local adoption center aimed at fundraising.</div>
                        <div>At FBLA State, I competed in the Graphic Design competition, where my peers and I simulated a marketing firm, crafting a branding package for a local bakery. Our collaborative effort yielded a visually captivating brand identity, showcasing our graphic design talents. </div>
                        <div>Volunteering for 10 hours at Feed My Starving Children was eye-opening. Witnessing the collective effort to pack meals for malnourished children globally left a lasting impact. It reinforced my dedication to service, motivating me to continue contributing.</div>
                        <div>During my 6-week internship, I had the opportunity to complete a professional portfolio for Sydney Curtis. This experience was invaluable as it allowed me to apply my skills and knowledge in a real-world setting.</div>
                </div>
            </div>
        </section>
        <h1 onClick={() => open('second', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('second', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('second')}>20<span>23</span></h1>
        <div className='white-bottom' id='second'></div>
        <section className='timeline-info-container' ref={infoContainerSecond} id='second-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y1S2</h3>
                <p>PROJECTS</p>
                <h3>FBLA 23</h3>
                <p>FLEX</p>
                <p>WEB DESIGN</p>
                <h3>WEST-MEC Y2S1</h3>
                <p>OFFICER WORK</p>
                <p>PROJECTS</p>
                <h3>EXTRAS</h3>
                <p>VOLUNTEER WORK</p>
                <p className='red-text'>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2>6 WEEK INTERNSHIP</h2>
                
            </div>
        </section>
        <h1 id='third-title' onClick={() => open('third', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('third', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('third')}>20<span>24</span></h1>
        <div className='white-bottom' id='third'></div>
        <section className='timeline-info-container' ref={infoContainerThird} id='third-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p>OFFICER WORK CONT</p>
                <p>PROJECTS</p>
                <h3>FBLA 24</h3>
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