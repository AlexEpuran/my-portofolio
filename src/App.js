import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomeSection from "./components/pages/HomeSection";
import AboutSection from "./components/pages/AboutSection";
import EducationSection from "./components/pages/EducationSection";
import WorkSection from "./components/pages/WorkSection";
import ContactSection from "./components/pages/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <HomeSection id="home" />
      <AboutSection id="about" />
      <EducationSection id="education" />
      <WorkSection id="work" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}

export default App;
