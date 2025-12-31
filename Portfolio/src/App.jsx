import React from "react";
import "./App.css";
import { useRef } from "react";
import Navbar from "./Navbar";
import Profile from './Profile.jpg'
import ABOUTME from "./ABOUTME.jpg";
import donation from "./donation.jpg";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaArrowAltCircleRight,
  FaGraduationCap,
} from "react-icons/fa";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  const gsapRef = useRef(null);

  useGSAP(()=>{
    gsap.from(".basic",{
      opacity:0,
      x:-200,
      duration:1,
      delay:1.2,
    }),
    gsap.from(".name",{
      opacity:0,
      x:200,
      duration:1,
      delay:1.2,
    }),
    gsap.from(".developerImg",{
      scale:0,
      duration:1,
      delay:1.2,
    }),
    gsap.from(".aboutSection .aboutme",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".aboutSection .aboutme",
        scroller:"body",
        start:"top 70%",
        ease:"bounce.out",
      }
    })
    gsap.from(".aboutMeContent p",{
      opacity:0,
      x:30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".aboutSection p",
        scroller:"body",
        start:"top 70%",
      }
    })
    gsap.from(".aboutSection a",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".aboutSection a",
        scroller:"body",
        start:"top 70%",
      }
    })
    gsap.from(".projects h1",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".projects h1",
        scroller:"body",
        start:"top 90%",
        ease:"bounce.out",
      }
    })
    gsap.from(".projects .projectDetails",{
      opacity:0,
      x:300,
      duration:0.8,
      delay:1,
      scrollTrigger:{
        trigger:".projects .projectDetails",
        scroller:"body",
        start:"top 90%",
        ease:"bounce.out",
      }
    })

    gsap.from(".skillsSection h1",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".skillsSection h1",
        scroller:"body",
        start:"top 90%",
        ease:"bounce.out",
      }
    })

    gsap.from(".skillsSection .skillsContent",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      stagger:1,

      scrollTrigger:{
        trigger:".skillsSection .skillsContent",
        scroller:"body",
        start:"top 90%",
        ease:"bounce.out",
      }
    })

    gsap.from(".educationHeading", {
      opacity: 0,
      y: -30,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".educationSection",
        scroller:"body",
        start: "top 50%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });

    gsap.from(".details", {
      opacity: 0,
      y: -30,
      ease: "power2.out",
      delay:1,
      duration:1.5,
      stagger:1,
      scrollTrigger: {
        trigger: ".details .educationDetail",
        scroller:"body",
        start: "top 50%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });


    gsap.from(".contactBodySection h1",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".contactBodySection h1",
        scroller:"body",
        start:"top 85%",
        ease:"bounce.out",
      }
    })

    gsap.from(".contactBodySection h2",{
      opacity:0,
      x:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".contactBodySection h1",
        scroller:"body",
        start:"top 85%",
        ease:"bounce.out",
      }
    })

    gsap.from(".contactBodySection p",{
      opacity:0,
      x:-30,
      duration:1,
      delay:1,
      scrollTrigger:{
        trigger:".contactBodySection p",
        scroller:"body",
        start:"top 85%",
        ease:"bounce.out",
      }
    })

    gsap.from(".contactBodySection .social-scroll",{
      opacity:0,
      y:-30,
      duration:1,
      delay:1.2,
      scrollTrigger:{
        trigger:".contactBodySection .social-scroll",
        scroller:"body",
        start:"top 85%",
        ease:"bounce.out",
      }
    })

    gsap.from(".contactBodySection .contactConnect",{
      opacity:0,
      y:30,
      duration:1,
      delay:1.3,
      scrollTrigger:{
        trigger:".contactBodySection .contactConnect",
        scroller:"body",
        start:"top 90%",
        ease:"bounce.out",
      }
    })

  })

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />

      <section className="homeSection" ref={homeRef}>
        <div className="homeSectionMainContent">
          <h1 className="basic">Hii, I am</h1>
          <img src={Profile} alt="error" className="developerImg" />
          <h1 className="name">Racheta</h1>
        </div>
      </section>

      <section className="aboutSection" ref={aboutRef}>
        <div className="aboutme">
          <h1>About me</h1>
          <p className="more-about-me">More about me</p>
          <div className="aboutMeMainContent">
            <img src={ABOUTME} alt="error" className="aboutMeImg" />
            <div className="aboutMeContent">
              <p>
                I am a Full Stack Developer and currently a 3rd-year student at
                Dronacharya College of Engineering. My academic background is in
                Computer Science & Information Technology, where I focus on
                building strong technical foundations along with practical
                skills.
              </p>
              <p>
                I enjoy gaining real-world experience by working on real
                projects rather than just learning theory. Solving problems,
                building complete applications, and understanding how systems
                work in real scenarios motivates me to grow as a developer.
              </p>
              <p>
                I have experience working with both Front-End and Back-End
                technologies, and I am always eager to learn new tools and
                improve my skills. I believe in continuous learning, teamwork,
                and building solutions that create real impact.
              </p>
              <a className="emailLink" href="mailto:chauhanracheta@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="social-scroll">
          <a href="https://www.linkedin.com/">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram /> Instagram
          </a>
          <a href="https://twitter.com/">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.github.com">
            <FaGithub /> GitHub
          </a>
        </div>
      </section>

      <section className="projectsSection" ref={projectsRef}>
        <div className="projects">
          <h1>Projects</h1>
          <div className="projectDetails">
            <div className="projectContent">
              <img src={donation} alt="donation-view" />
              <h2>Project Silent Hero – Donation Web Project</h2>
              <p>
                Built a responsive donation website using HTML, CSS, and
                JavaScript. Designed clear donation sections, intuitive
                navigation, and accessible UI/UX. Focused on mobile
                responsiveness, smooth interactions, and user-friendly design to
                enhance donor engagement.
              </p>
              <div className="projectLanguage">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>MongoDB</p>
                <p>ExpressJs</p>
              </div>
              <div className="projectLinks">
                <a href="https://www.github.com">
                  <FaGithub /> Source Code
                </a>

                <a href="https://www.com">
                  Visit Side <FaArrowAltCircleRight />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skillsSection" ref={skillsRef}>
        <div>
          <h1>Skills</h1>
          <div className="skillsMainContent">
            <main className="skillsContent">
              <h2 className="skillHeading">Front-End Development</h2>
              <div className="contentDiv">
                <img
                  src="https://webdevmonk.com/main/html.png"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">HTML</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aytI1gnF-V7KmPQjX0tOBJZYOkRfmC4Hwe2Qc20rC6gHZcbSKN0rfto_a9R9XNfZ_dA&usqp=CAU"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">CSS</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59m3YRaOrM0AN8pdjaAVxR1SEpPaHBVWa1w&s"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">JavaScript</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0RAllozh2bKCwPOYa6fqlTm7nSkGG_rFvQ1PKbMyOFqbySD76m6wslx1zryADjqgj_E&usqp=CAU"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">React</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
            </main>

            <main className="skillsContent">
              <h2 className="skillHeading">Back-End Development</h2>

              <div className="contentDiv">
                <img
                  src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">NodeJS</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1_1dWe0_UqallbnXqzg-t1Oqk_Q90TJMoUsbRWdQR59K05-vSELWLxg5TbpMoQCWLhQ&usqp=CAU"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">MongoDB</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">ExpressJs</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
            </main>

            <main className="skillsContent">
              <h2 className="skillHeading">Tools and Technologies</h2>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBWgSnZH6S-futYExOeIhmqMcpt66luVB-racOB-zNbFb6VyBRCmOAaYd0UHn3lP4md0&usqp=CAU"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">Visual Studio Code</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://play-lh.googleusercontent.com/baV9RL2D0iV8JkTtCzSxeLf6XxCJMWQYbyXMqyQfc0OQGtjkCyUenUbLb5tefYfMxfU"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">Replit</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <p className="value">
                  <FaGithub></FaGithub> GitHub
                </p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
            </main>

            <main className="skillsContent">
              <h2 className="skillHeading">Basic Knowledge</h2>
              <div className="contentDiv">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtVT5JBtyqCpePadztNLv7bbBaFbIvevTEw&s"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">DBMS</p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
              <div className="contentDiv">
                <img
                  src="https://i.ytimg.com/vi/MhYECGUzdA4/sddefault.jpg"
                  alt=""
                  className="skillsImg"
                />
                <p className="value">C++ </p>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillAchieved"></div>
                <div className="skillNotAchieved"></div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="educationSection" ref={educationRef}>
        <div className="education">
          <h1 className="educationHeading">Education</h1>
          
          <div className="details">
            <div className="educationDetail">
              <FaGraduationCap size={60}></FaGraduationCap>
              <div>
                <h1>Bachelor Of Technology</h1>
                <div className="subdetails">
                  <h3>Dronacharya College of Engineering</h3>
                  <p>2023-present</p>
                </div>
              </div>
            </div>
            <div className="educationDetail">
              <FaGraduationCap size={60}></FaGraduationCap>
              <div>
                <h1>12th </h1>
                <div className="subdetails">
                  <h3>Central Board of Secondary Education</h3>
                  <p>2022-23|CGPA: 7.9</p>
                </div>
              </div>
            </div>

            <div className="educationDetail">
              <FaGraduationCap size={60}></FaGraduationCap>
              <div>
                <h1>10th</h1>
                <div className="subdetails">
                  <h3>Central Board of Secondary Education</h3>
                  <p>2020-21|CGPA: 9.54</p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section className="contactSection" ref={contactRef}>
        <div>
          <main className="contactBodySection">
            <h1>Contact</h1>

            <div className="contactMainContent">
              <div className="Contactcontent">
                <h2>Let’s Connect</h2>

                <p>
                  I’m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out using the details below.
                </p>
              </div>

              <div className="social-scroll">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://twitter.com/">
                  <FaTwitter /> Twitter
                </a>
                <a href="https://www.github.com">
                  <FaGithub /> GitHub
                </a>
              </div>

              <div className="contactConnect">
                <a
                  href="mailto:chauhanracheta@gmail.com"
                  className="contactConnectBtn"
                >
                  Let's Chat <FaArrowAltCircleRight size={20} />
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default App;
