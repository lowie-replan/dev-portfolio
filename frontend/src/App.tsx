import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/portfolio/Navbar';
import Hero from './pages/portfolio/Hero';
import About from './pages/portfolio/About';
import TechToolkit from './pages/portfolio/TechToolkit';
import Projects from './pages/portfolio/Projects';
import Contact from './pages/portfolio/Contact';
import Footer from './pages/portfolio/Footer';
import AdminLogin from './pages/admin/Login';
import AdminHome from './pages/admin/Dashboard';

const Portfolio = () => {
  return (
    <main className='bg-background'>

      {/* ======== NAVBAR ======== */}
      <Navbar/>

      {/* ======== HERO SECTION ======== */}
      <section id='home'>
        <Hero name="Lowie John Replan"/>
      </section>

      {/* ======== ABOUT SECTION ======== */}
      <section id='about' className='mb-15'>
        <About/>
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

      {/* ======== FOOTER ======== */}
      <Footer/>

    </main>
  );
};

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/Admin">
          <Route path="Login" element={<AdminLogin />} />
          <Route path="Dashboard" element={<AdminHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;