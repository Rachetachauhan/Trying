import { Routes, Route, Link, NavLink } from "react-router-dom";
import React from 'react'
import About from './About'
import Education from "./Education";
import Experience from './Experience'
import Skill from './Skill'
import Project from './Project'
import Certificate from './Certificate'
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
        <h1></h1>
        <div style={styles.links}>
        <NavLink to="/">Home</NavLink><br/>
        <NavLink to="/education">Education</NavLink><br/>
        <NavLink to="/skills">Skills</NavLink><br/>
        <NavLink to="/experience">Experience</NavLink><br/>
        <NavLink to="/projects">Projects</NavLink><br/>
        <NavLink to="/certificate">Certificate</NavLink><br/>
        <NavLink to="/contact">Contact</NavLink><br/>
        </div>
    </div>
  )
}

const styles = {
  
  links:{
    textAlign:"center",
    justifyContent:"center",
    alignContent:"center",
    border:"1px solid red,"          


  }

}

export default Home
