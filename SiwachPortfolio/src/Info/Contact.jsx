
import React from "react";
import "./contact.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contactBodySection">
      <h1>Contact</h1>

      <section className="contactMainContent">
        <div className="Contactcontent">
          <h2>Let’s Work Together</h2>

          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            using the details below.
          </p>

          <ul className="contactList">
            <li>Whether you have a question</li>
            <li>Just want to say hi</li>
            <li>I’ll try my best to get back to you</li>
          </ul>
        </div>

        <div className="contactConnect">
          <a
            href="mailto:rochaksiwach13@gmail.com"
            className="contactConnectBtn"
          >
            Let's Chat <FaArrowAltCircleRight size={20} />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Contact;
