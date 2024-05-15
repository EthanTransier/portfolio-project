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
    // Array for holding the titles
    const firstTitles = [firstInfo1, firstInfo2, firstInfo3]

    const secondText = useRef(0)
    const secondTextTitle = useRef(0)

    // The different titles for the second year (2022), they are on the left
    const secondInfo1 = useRef(0)
    const secondInfo2 = useRef(0)
    const secondInfo3 = useRef(0)
    const secondInfo4 = useRef(0)
    const secondInfo5 = useRef(0)
    const secondInfo6 = useRef(0)
    // Array for holding the titles
    const secondTitles = [secondInfo1, secondInfo2, secondInfo3, secondInfo4, secondInfo5, secondInfo6]

    const thirdText = useRef(0)
    const thirdTextTitle = useRef(0)

    // The different titles for the third year (2022), they are on the left
    const thirdInfo1 = useRef(0)
    const thirdInfo2 = useRef(0)
    const thirdInfo3 = useRef(0)
    const thirdInfo4 = useRef(0)
    const thirdInfo5 = useRef(0)
    const thirdInfo6 = useRef(0)
    // Array for holding the titles
    const thirdTitles = [thirdInfo1, thirdInfo2, thirdInfo3, thirdInfo4, thirdInfo5, thirdInfo6]

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

    function openSecondInfo(item){
        for(let i = 0; i < secondTitles.length; i++){
            console.log(secondTitles[i].current)
            console.log(secondTitles)
            secondTitles[i].current.className = ""
        }
        secondTitles[item].current.className = 'red-text'
        gsap.timeline()
            .to(`#second-text-container`, {
                translateY: `${-100 * item}%`,
                ease: "circ.inOut",
                duration: 0.35
            })
        secondTextTitle.current.innerHTML = secondTitles[item].current.innerHTML
    }

    function openThirdInfo(item){
        for(let i = 0; i < thirdTitles.length; i++){
            console.log(thirdTitles[i].current)
            console.log(thirdTitles)
            thirdTitles[i].current.className = ""
        }
        thirdTitles[item].current.className = 'red-text'
        gsap.timeline()
            .to(`#third-text-container`, {
                translateY: `${-100 * item}%`,
                ease: "circ.inOut",
                duration: 0.35
            })
        thirdTextTitle.current.innerHTML = thirdTitles[item].current.innerHTML
    }

  return (
    <div className='timeline-container'>
        <h1 onClick={() => open('first', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('first', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('first')}>20<span>22</span></h1>
        <div className='white-bottom' id='first'></div>
        <section className='timeline-info-container' ref={infoContainerFirst} id='first-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y1S1</h3>
                <p onClick={() => openFirstInfo(0)} ref={firstInfo1} className='red-text'>THE BEGINNING</p>
                <p onClick={() => openFirstInfo(1)} ref={firstInfo2}>PROJECTS</p>
                <h3>FBLA PREP</h3>
                <p onClick={() => openFirstInfo(2)} ref={firstInfo3}>WEB DESIGN</p>
            </div>
            <div className="timeline-right">
                <h2 ref={firstTextTitle}>OFFICER WORK CONT</h2>
                <div ref={firstText} className='timeline-text-container' id='first-text-container'>
                        <div>During my first semester at West-MEC, I began the fundamentals of web development, learning HTML, CSS, and JavaScript, setting a strong foundation for my journey in programming. I gained invaluable skills that empowered me to create dynamic websites.</div>
                        <div>That year, I embarked on beginner projects at West-MEC, honing my skills in HTML, CSS, and JavaScript. These projects culminated in the creation of my first portfolio, showcasing my growth and passion for web development.</div>
                        <div>During my first semester of my first year, I prepared for FBLA state and regionals, honing my skills in website design. With dedication and practice, I aimed to create captivating and functional websites that would leave a lasting impression on judges and spectators alike.</div>
                </div>
            </div>
        </section>
        <h1 onClick={() => open('second', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('second', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('second')}>20<span>23</span></h1>
        <div className='white-bottom' id='second'></div>
        <section className='timeline-info-container' ref={infoContainerThird} id='second-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y1S2</h3>
                <p onClick={() => openSecondInfo(0)} ref={secondInfo1} className='red-text'>PROJECTS</p>
                <h3>FBLA 23</h3>
                <p onClick={() => openSecondInfo(1)} ref={secondInfo2}>FLEX</p>
                <p onClick={() => openSecondInfo(2)} ref={secondInfo3}>WEB DESIGN</p>
                <h3>WEST-MEC Y2S1</h3>
                <p onClick={() => openSecondInfo(3)} ref={secondInfo4}>OFFICER WORK</p>
                <p onClick={() => openSecondInfo(4)} ref={secondInfo5}>PROJECTS</p>
                <h3>EXTRAS</h3>
                <p onClick={() => openSecondInfo(5)} ref={secondInfo6}>VOLUNTEER WORK</p>
            </div>
            <div className="timeline-right">
                <h2 ref={secondTextTitle}>OFFICER WORK CONT</h2>
                <div ref={secondText} className='timeline-text-container' id='second-text-container'>
                        <div>During my second semester at West-MEC, I tackled projects like the QuickTek computer demo site and my second portfolio project. Alongside, I delved into jQuery and SCSS, expanding my toolkit and refining my web development expertise.</div>
                        <div>At the FBLA Leadership Expo (FLEX), I immersed myself in a dynamic environment, networking with industry professionals and fellow enthusiasts. Participating in workshops and competitions, I gained insights and inspiration for my future in web development and beyond.</div>
                        <div>In my inaugural website design competition, my team and I secured the 9th position in the state, marking a promising start to our journey. This achievement fueled my passion for web development and inspired me to strive for even greater success in future competitions.</div>
                        <div>As the Year 2 class representative, I initiated my officer role in the first semester of my second year at West-MEC. Meeting with the team, I fostered a sense of camaraderie and purpose, facilitating planning sessions and strategizing initiatives to enhance our class experience.</div>
                        <div>During that semester, I spearheaded various projects, including the GameBox platform and refining the QuickTek computer site, elevating my skills in web development. Simultaneously, I delved into learning Node.js and React, expanding my knowledge in web development.</div>
                        <div>Engaging in online volunteer work for Glendale Public Library, I contributed to digital initiatives, fostering community engagement. Through my efforts, I aimed to enrich the library's online presence and support its mission of serving the local community.</div>
                </div>
            </div>
        </section>
        <h1 onClick={() => open('third', window.innerWidth > 1100 ? '60%' : '90%')} onMouseEnter={() => enter('third', window.innerWidth > 1100 ? '60%' : '90%')} onMouseLeave={() => leave('third')}>20<span>24</span></h1>
        <div className='white-bottom' id='third'></div>
        <section className='timeline-info-container' ref={infoContainerThird} id='third-info'>
            <div className="timeline-left">
                <h3>WEST-MEC Y2S2</h3>
                <p onClick={() => openThirdInfo(0)} ref={thirdInfo1} className='red-text'>OFFICER WORK CONT</p>
                <p onClick={() => openThirdInfo(1)} ref={thirdInfo2}>PROJECTS</p>
                <h3>FBLA</h3>
                <p onClick={() => openThirdInfo(2)} ref={thirdInfo3}>WEB DESIGN</p>
                <p onClick={() => openThirdInfo(3)} ref={thirdInfo4}>GRAPHIC DESIGN</p>
                <h3>EXTRAS</h3>
                <p onClick={() => openThirdInfo(4)} ref={thirdInfo5}>VOLUNTEER WORK</p>
                <p onClick={() => openThirdInfo(5)} ref={thirdInfo6}>6 WEEK INTERNSHIP</p>
            </div>
            <div className="timeline-right">
                <h2 ref={thirdTextTitle}>OFFICER WORK CONT</h2>
                <div ref={thirdText} className='timeline-text-container' id='third-text-container'>
                        <div>During my second semester at West-MEC as an FBLA Officer, I worked closely with my team to plan events like FBLA Regionals and State, emphasizing teamwork and communication. I also played a key role in organizing fundraisers to support our coding program.</div>
                        <div>This semester at West-MEC, I completed a Unity game project and began work on an EMR Web Application for the Medical Assisting programs. While honing my skills in React and Next.js, I delved into both frontend and backend web development.</div>
                        <div>At FBLA State, I competed in the Web Design Competition and secured 6th place in the state, earning a spot for Nationals. My project was a Gala Website designed for a local adoption center aimed at fundraising.</div>
                        <div>At FBLA State, I competed in the Graphic Design competition, where my peers and I simulated a marketing firm, crafting a branding package for a local bakery. Our collaborative effort yielded a visually captivating brand identity, showcasing our graphic design talents. </div>
                        <div>Volunteering for 10 hours at Feed My Starving Children was eye-opening. Witnessing the collective effort to pack meals for malnourished children globally left a lasting impact. It reinforced my dedication to service, motivating me to continue contributing.</div>
                        <div>During my 6-week internship, I had the opportunity to complete a professional portfolio for Sydney Curtis. This experience was invaluable as it allowed me to apply my skills and knowledge in a real-world setting.</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Timeline