import React from 'react';
import "./Navbar.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const Navbar = ({ homeRef, aboutRef, projectsRef, skillsRef, educationRef, contactRef }) => {

    function scrollSection(ref){
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    useGSAP(()=>{
      gsap.from(".navbar",{
        opacity:0,
        y:-30,
        duration:0.3,
        delay:1,
        ease:"bounce.out"
      })
    })
  return (
    <nav className="navbar">
      <a href='#home' className="btn" onClick={() => scrollSection(homeRef)}>Home</a>
      <a href='#about' className="btn" onClick={() => scrollSection(aboutRef)}>About</a>
      <a href='#projects' className="btn" onClick={() => scrollSection(projectsRef)}>Projects</a>
      <a href='#skills' className="btn" onClick={() => scrollSection(skillsRef)}>Skills</a>
      <a href='#education' className="btn" onClick={() => scrollSection(educationRef)}>Education</a>
      <a href='#contact' className="btn" onClick={() => scrollSection(contactRef)}>Contact</a>
    </nav>
  )
}
 
export default Navbar;
