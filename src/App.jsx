import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)',
        fontSize: '0.8rem',
      }}>
        Designed & built by Aira Gayle Uy · Cebu City, Philippines
      </footer>
    </>
  );
}

export default App;