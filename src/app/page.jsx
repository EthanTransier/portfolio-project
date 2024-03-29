'use client'
import Header from '../Components/Header'
export default function Home() {
  return (
    <main>
      <Header page="home"></Header>
      <section className='landing-section'>
        <h1><p>E</p><p>T</p><p className='text-background'>H</p><p>A</p><p>N</p></h1>
        <img src="/images/main-shape.svg" alt="main landing shape" height={175} width={175} className='main-shape'/>
      </section>
    </main>
  );
}
