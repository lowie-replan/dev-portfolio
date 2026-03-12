import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TechCards from './components/TechCards';

function App() {
  return (
    <main className='bg-background'>
      <Navbar/>

      <section id='home'>
        <Hero name="Lowie John Replan"/>
      </section>

      <section id='about'>
        <About></About>
      </section>
      
      <section id='projects'>
        <Projects/>
      </section>
      <hr className='m-12 border-zinc-600'/>
      <Footer/>
    </main>
  );
}

export default App;