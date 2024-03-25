import React from "react";
import linkedinLogo from "../images/linkedinlogo.jpg";
import phoneLogo from "../images/Whatsapplogo.jpg";
import "./Contact.css";

const Contact = () => {

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <a href="https://wa.link/1o26u0">
          <img src={phoneLogo} alt="Phone Logo" className="logo" />
        </a>

        <a href="https://www.linkedin.com/in/sanjay-chauhan-444a5623b">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
