'use client'
import Header from '../../Components/Header'
import Heatmap from '../../Components/Heatmap'
import Timeline from '../../Components/Timeline'
import Footer from '../../Components/Footer'
import Skills from '../../Components/Skills'

export default function Home() {
  return (
    <main>
      <Header page="about"></Header>
      <section className='about-opening'>
        <Heatmap></Heatmap>
      </section>
      <Skills></Skills>
      <Timeline></Timeline>
      <Footer></Footer>
    </main>
  );
}
