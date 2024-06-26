'use client'
import Header from '../../Components/Header'
import SocialMedia from '../../Components/SocialMedia'
import Footer from '../../Components/Footer'
export default function Home() {
  return (
    <main className='contact-main'>
      <Header page="contact"></Header>
      <h1>WANNA TALK? YOU SHOULD . . .</h1>
      <section className="contact-container">
        <section className="email-section">
          <h2>EMAIL ME</h2>
          <a href="mailto:etrans640@gmail.com">Shoot Me a Message</a>
        </section>
        <div className="red-line"></div>
        <div className="green-line"></div>
        <section className="social-section">
          <h2>DM ME ON ONE OF THESE SOCIALS</h2>
          <SocialMedia></SocialMedia>
        </section>
      </section>
      <Footer></Footer>
    </main>
  );
}
