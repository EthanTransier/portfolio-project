import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useState, useRef} from 'react'
import {useEffect} from 'react';
import anime from "animejs";

const SocialMedia = () => {
    // Starting animation for the icons, traces their strokes, so it looks like they are being drawn
    useEffect(() => {
        const animateIcons = () => {
            anime({
                targets: '.social-icon path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: 1100
            });
        };

        animateIcons();
    }, []);

    // containers for the icons
    const container1 = useRef(0)
    const container2 = useRef(0)
    const container3 = useRef(0)

    return (
        <div className='social-media-container'>
            <div ref={container1}>
                {/* Insagram logo */}
                <svg width="180px" height="180px" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" className='social-icon'>
                    <path id="myPath" d="M11.375 2.91675H23.625C28.2917 2.91675 32.0834 6.70841 32.0834 11.3751V23.6251C32.0834 25.8684 31.1922 28.0198 29.606 29.606C28.0197 31.1923 25.8683 32.0834 23.625 32.0834H11.375C6.70835 32.0834 2.91669 28.2917 2.91669 23.6251V11.3751C2.91669 9.13179 3.80783 6.98038 5.39408 5.39414C6.98032 3.80789 9.13173 2.91675 11.375 2.91675ZM11.0834 5.83341C9.69097 5.83341 8.35561 6.38654 7.37104 7.3711C6.38648 8.35567 5.83335 9.69103 5.83335 11.0834V23.9167C5.83335 26.8188 8.18127 29.1667 11.0834 29.1667H23.9167C25.3091 29.1667 26.6444 28.6136 27.629 27.6291C28.6136 26.6445 29.1667 25.3091 29.1667 23.9167V11.0834C29.1667 8.18133 26.8188 5.83341 23.9167 5.83341H11.0834ZM25.1563 8.02091C25.6397 8.02091 26.1034 8.21297 26.4453 8.55483C26.7871 8.8967 26.9792 9.36036 26.9792 9.84383C26.9792 10.3273 26.7871 10.791 26.4453 11.1328C26.1034 11.4747 25.6397 11.6667 25.1563 11.6667C24.6728 11.6667 24.2091 11.4747 23.8673 11.1328C23.5254 10.791 23.3334 10.3273 23.3334 9.84383C23.3334 9.36036 23.5254 8.8967 23.8673 8.55483C24.2091 8.21297 24.6728 8.02091 25.1563 8.02091ZM17.5 10.2084C19.4339 10.2084 21.2886 10.9766 22.656 12.3441C24.0235 13.7115 24.7917 15.5662 24.7917 17.5001C24.7917 19.434 24.0235 21.2886 22.656 22.6561C21.2886 24.0235 19.4339 24.7917 17.5 24.7917C15.5661 24.7917 13.7115 24.0235 12.344 22.6561C10.9766 21.2886 10.2084 19.434 10.2084 17.5001C10.2084 15.5662 10.9766 13.7115 12.344 12.3441C13.7115 10.9766 15.5661 10.2084 17.5 10.2084ZM17.5 13.1251C16.3397 13.1251 15.2269 13.586 14.4064 14.4065C13.586 15.227 13.125 16.3398 13.125 17.5001C13.125 18.6604 13.586 19.7732 14.4064 20.5937C15.2269 21.4141 16.3397 21.8751 17.5 21.8751C18.6603 21.8751 19.7731 21.4141 20.5936 20.5937C21.4141 19.7732 21.875 18.6604 21.875 17.5001C21.875 16.3398 21.4141 15.227 20.5936 14.4065C19.7731 13.586 18.6603 13.1251 17.5 13.1251Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1000" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <div ref={container2}>
                {/* Github Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="180px" height="180px" viewBox="0 0 24 24" className='social-icon'>
                    <path fill="none" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
            </div>
            <div ref={container3}>
                {/* Linkedin logo */}
                <svg width="180px" height="180px" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className='social-icon'>
                    <path d="M27.7083 4.375C28.4819 4.375 29.2237 4.68229 29.7707 5.22927C30.3177 5.77625 30.625 6.51812 30.625 7.29167V27.7083C30.625 28.4819 30.3177 29.2237 29.7707 29.7707C29.2237 30.3177 28.4819 30.625 27.7083 30.625H7.29167C6.51812 30.625 5.77625 30.3177 5.22927 29.7707C4.68229 29.2237 4.375 28.4819 4.375 27.7083V7.29167C4.375 6.51812 4.68229 5.77625 5.22927 5.22927C5.77625 4.68229 6.51812 4.375 7.29167 4.375H27.7083ZM26.9792 26.9792V19.25C26.9792 17.9891 26.4783 16.7799 25.5867 15.8883C24.6951 14.9967 23.4859 14.4958 22.225 14.4958C20.9854 14.4958 19.5417 15.2542 18.8417 16.3917V14.7729H14.7729V26.9792H18.8417V19.7896C18.8417 18.6667 19.7458 17.7479 20.8688 17.7479C21.4102 17.7479 21.9295 17.963 22.3124 18.3459C22.6953 18.7288 22.9104 19.2481 22.9104 19.7896V26.9792H26.9792ZM10.0333 12.4833C10.6831 12.4833 11.3063 12.2252 11.7657 11.7657C12.2252 11.3063 12.4833 10.6831 12.4833 10.0333C12.4833 8.67708 11.3896 7.56875 10.0333 7.56875C9.37969 7.56875 8.75281 7.82841 8.29061 8.29061C7.82841 8.75281 7.56875 9.37969 7.56875 10.0333C7.56875 11.3896 8.67708 12.4833 10.0333 12.4833ZM12.0604 26.9792V14.7729H8.02083V26.9792H12.0604Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="1000"  strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default SocialMedia