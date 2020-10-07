import React from "react";
import ContactForm from "./ContactForm";
import './ContactSection.css'

export default function ContactSection({ id }) {
  return (
    <div className="contact-section-main" id={id}>
      
      <h1>CONTACT</h1>
      <ContactForm />
    </div>
  );
}
