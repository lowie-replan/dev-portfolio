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
import AdminProject from './pages/admin/AdminProject';
import AdminToolkits from './pages/admin/AdminToolkits';
import AdminCerts from './pages/admin/AdminCerts';
import AdminLayout from './pages/admin/AdminLayout';

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
        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="Dashboard" element={<AdminHome />} />
          <Route path="AdminProject" element={<AdminProject />} />
          <Route path="AdminToolkits" element={<AdminToolkits />} />
          <Route path="AdminCerts" element={<AdminCerts />} />
        </Route>
        <Route path="/Admin/Login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;