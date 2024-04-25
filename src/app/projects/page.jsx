'use client'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Projects from '../../Components/Projects';
export default function Home() {
  return (
    <main>
      <Header page="projects"></Header>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
}
