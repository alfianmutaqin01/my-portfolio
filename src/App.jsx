import { useState } from 'react'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './pages/Skill';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/" element={ <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/skills" element={<Skill />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
