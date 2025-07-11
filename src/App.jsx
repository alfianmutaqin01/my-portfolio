import { useState } from "react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Certification from "./pages/Certification";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);
  useEffect(() => {
    document.body.classList.add("custom-cursor");
    return () => document.body.classList.remove("custom-cursor");
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
