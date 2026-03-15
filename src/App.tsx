import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechToolkit from './components/toolkits/TechToolkit';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    
    <main className='bg-background'>

      {/* ======== NAVBAR ======== */}
      <Navbar/>

      {/* ======== HERO SECTION ======== */}
      <section id='home'>
        <Hero name="Lowie John Replan"/>
      </section>

      {/* ======== TOOLKIT SECTION ======== */}
      <section id='tech_toolkit' className='mb-15'>
        <TechToolkit/>
      </section>
      
      {/* ======== PROJECTS SECTION ======== */}
      <section id='projects' className='mb-15'>
        <Projects/>
      </section>

      {/* ======== CONTACT SECTION ======== */}
      <section id='contact' className='mb-15'>
        <Contact/>
      </section>

      <hr className='m-12 border-zinc-600'/>

      {/* ======== FOOTER ======== */}
      <Footer/>

    </main>
  );
}

export default App;