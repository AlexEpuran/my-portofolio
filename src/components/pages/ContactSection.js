import React from "react";
import ContactForm from "./ContactForm";
import './ContactSection.css'

export default function ContactSection({ id }) {
  return (
    <div className="contact-section-main" id={id}>
      <div className="main-title-container">
        <h1 className='main-title'>Contact <span className="main-title-span">Me</span></h1>
      </div>
      <ContactForm />
    </div>
  );
}
