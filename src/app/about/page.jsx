'use client'
import Header from '../../Components/Header'
import Heatmap from '../../Components/Heatmap'
import AboutOpener from '@/Components/AboutOpener'
import Timeline from '../../Components/Timeline'
import Footer from '../../Components/Footer'
import Skills from '../../Components/Skills'

export default function Home() {
  return (
    <main>
      <Header page="about"></Header>
      <AboutOpener></AboutOpener>
      <Skills></Skills>
      <Timeline></Timeline>
      <Footer></Footer>
    </main>
  );
}
