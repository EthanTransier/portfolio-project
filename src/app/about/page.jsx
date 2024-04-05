'use client'
import Header from '../../Components/Header'
import Heatmap from '../../Components/Heatmap'
import Timeline from '../../Components/Timeline'
export default function Home() {
  return (
    <main>
      <Header page="about"></Header>
      <section className='about-opening'>
        <Heatmap></Heatmap>
      </section>
      <Timeline></Timeline>
    </main>
  );
}
