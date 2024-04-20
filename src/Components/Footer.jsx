import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <section className="footer-content">
            <section className="links">
                <h5>
                    <p>H</p>
                    <p>O</p>
                    <p>M</p>
                    <p>E</p>
                </h5>
                <div className="red-dot"></div>
                <h5>
                    <p>A</p>
                    <p>B</p>
                    <p>O</p>
                    <p>U</p>
                    <p>T</p>
                </h5>
                <div className="red-dot"></div>
                <h5>
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p>S</p>
                </h5>
                <div className="red-dot"></div>
                <h5>
                    <p>C</p>
                    <p>O</p>
                    <p>N</p>
                    <p>T</p>
                    <p>A</p>
                    <p>C</p>
                    <p>T</p>
                </h5>
            </section>
            <section className="name">
                <div className="green-dot"></div>
                <h1 className='first'>
                    <p>E</p>
                    <p>T</p>
                    <p>H</p>
                    <p>A</p>
                    <p>N</p>
                </h1>
                <h1 className='second'>
                    <p>T</p>
                    <p>R</p>
                    <p>A</p>
                    <p>N</p>
                    <p>S</p>
                    <p>I</p>
                    <p>E</p>
                    <p>R</p>
                </h1>
                 <div className="green-dot"></div>
            </section>
            <section className="socials">
                <Image src={'/images/instagram.svg'} alt="instagram" height="48" width="48"></Image>
                <Image src={'/images/github.svg'} alt="github" height="48" width="48"></Image>
                <Image src={'/images/linkedin.svg'} alt="linkedin" height="48" width="48"></Image>
            </section>
        </section>
        <section className="mobile-footer">
            <div className="mobile-name">
                <h1>ETHAN</h1>
                <h1>TRANSIER</h1>
            </div>
            <div className="mobile-links">
                <Link href={'/'}>
                    HOME
                </Link>
                <Link href={'/about'}>
                    ABOUT
                </Link>
                <Link href={'/projects'}>
                    PROJECTS
                </Link>
                <Link href={'/contact'}>
                    CONTACT
                </Link>
            </div>
            <div className="mobile-socials">
                <Image src={'/images/instagram.svg'} alt="instagram" height="48" width="48"></Image>
                <Image src={'/images/github.svg'} alt="github" height="48" width="48"></Image>
                <Image src={'/images/linkedin.svg'} alt="linkedin" height="48" width="48"></Image>
            </div>
        </section>
        <div className="bottom-row-container">
            <div className="bottom-red"></div>
            <div className="bottom-green"></div>
        </div>
    </footer>
  )
}

export default Footer