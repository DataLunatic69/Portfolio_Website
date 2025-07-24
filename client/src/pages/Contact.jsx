import React, { useState } from "react";

export default function ContactForm() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out if you're interested in collaborating, 
            have questions about my work, or just want to connect!
          </p>
          
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> aman@example.com</p>
            <p><strong>Location:</strong> India</p>
            
            <div className="social-links">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
