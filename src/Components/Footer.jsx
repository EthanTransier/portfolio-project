import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <section className="footer-content">
            <section className="links">
                <Link href="/">
                    <p>H</p>
                    <p>O</p>
                    <p>M</p>
                    <p>E</p>
                </Link>
                <div className="red-dot"></div>
                <Link href="/about">
                    <p>A</p>
                    <p>B</p>
                    <p>O</p>
                    <p>U</p>
                    <p>T</p>
                </Link>
                <div className="red-dot"></div>
                <Link href="/projects">
                    <p>P</p>
                    <p>R</p>
                    <p>O</p>
                    <p>J</p>
                    <p>E</p>
                    <p>C</p>
                    <p>T</p>
                    <p>S</p>
                </Link>
                <div className="red-dot"></div>
                <Link href="/contact">
                    <p>C</p>
                    <p>O</p>
                    <p>N</p>
                    <p>T</p>
                    <p>A</p>
                    <p>C</p>
                    <p>T</p>
                </Link>
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
                <a href='https://www.instagram.com/ethan_transier?igsh=M3R6bjJ4ZmhxMWxy&utm_source=qr'><Image src={'/images/instagram.svg'} alt="instagram" height="48" width="48"></Image></a>
                <a href="https://www.github.com/EthanTransier"><Image src={'/images/github.svg'} alt="github" height="48" width="48"></Image></a>
                <a href="https://www.linkedin.com/in/ethan-transier-651a432a4"><Image src={'/images/linkedin.svg'} alt="linkedin" height="48" width="48"></Image></a>
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