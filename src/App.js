import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomeSection from "./components/pages/HomeSection";
import AboutSection from "./components/pages/AboutSection";
import SkillsSection from "./components/pages/SkillsSection";
import WorkSection from "./components/pages/WorkSection";
import ContactSection from "./components/pages/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <HomeSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <WorkSection id="work" />
      <ContactSection id="contact" />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
