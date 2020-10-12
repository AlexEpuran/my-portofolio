import React from "react";
import ContactForm from "./ContactForm";
import './ContactSection.css'

export default function ContactSection({ id }) {
  return (
    <div className="contact-section-main" id={id}>
      <div className="main-title-container">
        <h1 className='main-title'>Contact <span className="main-title-span">Me</span></h1>
      </div>
      <div className="contact-location-main-container">
      <div className="location-container">
          <div className="name-container">
            <i class="fas fa-user"></i>
            <div className="h1-p-container">
            <h1>Name</h1>
            <p>Epuran Alexandru</p>
            </div>
          </div>
          <div className="address-container">
            <i class="fas fa-map-marker-alt"></i>
            <div className="h1-p-container">
            <h1>Address</h1>
            <p>Cluj-Napoca, ROMANIA</p>
            </div>
          </div>
          <div className="email-container">
            <i class="fas fa-envelope"></i>
            <div className="h1-p-container">
            <h1>Email</h1>
            <p>epuranalex89@gmail.com</p>
            </div>
            
          </div>
          <div className="email-container">
            <i class="fas fa-phone"></i>
            <div className="h1-p-container">
            <h1>Phone</h1>
            <p>+40 771673328</p>
            </div>
            
          </div>
      </div>
        <ContactForm />
        </div>
    </div>
  );
}
