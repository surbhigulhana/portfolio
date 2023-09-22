import React, { useEffect, useRef } from 'react'
import contact from '../Component/img/contact.gif';
import about from '../Component/img/about.png'
import r from '../Component/img/r.png'
import n from '../Component/img/n.png'
import e from '../Component/img/e.png'
import m from '../Component/img/m.png'
import b from '../Component/img/b.png'
import h from '../Component/img/h.png'
import c from '../Component/img/c.png'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import cv from './img/surbhicv (1).pdf'
const Home = () => {

  const targetDivRef1 = useRef(null);
  const targetDivRef3 = useRef(null);

  const handleScroll1 = () => {


    const targetDiv1 = targetDivRef1.current;
    
    const targetDiv3 = targetDivRef3.current;

    if (targetDiv1 && isElementInViewport1(targetDiv1)) {
      targetDiv1.classList.add('ani2');
    }
    else if (targetDiv3 && isElementInViewport1(targetDiv3)) {
      targetDiv3.classList.add('ani2');
    }

  };

  const isElementInViewport1 = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll1);
    return () => {
      window.removeEventListener('scroll', handleScroll1);
    };
  }, [])


  // -------------------------------------------------------------------------------

  const targetDivRef = useRef(null);
  const targetDivRef2 = useRef(null);
  const handleScroll = () => {
    const targetDiv = targetDivRef.current;

    const targetDiv2 = targetDivRef2.current;

    if (targetDiv && isElementInViewport(targetDiv) ) {
      targetDiv.classList.add('ani1');
    }
    else if(targetDiv2 && isElementInViewport(targetDiv2) ){
      targetDiv2.classList.add('ani1');
    }

  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hn064m4', 'template_ujreoqk', form.current, 'X0r5AmQ799n8UJPwR')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          // title: 'Password Changed',
          text: "we got your query. our team respond within a day",
        })
      }, (error) => {
        console.log(error.text);
      });
  };
  useEffect(() => {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    let MAX = 100;

    let run = setInterval(() => {
      count++;
      progress.forEach(element => {
        if (count <= element.dataset.progress) {
          element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
          element.firstElementChild.textContent = `${count}%`;
        }
        if (count === MAX) {
          clearInterval(run);
        }
      });
    }, 20);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(run);
    };
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top  w-100" id="l1">
        <a class="navbar-brand" href="suru.png" target='__blank'>
          <img src="suru.png" alt="Logo Image" id="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white" }}
        >
          <img src="hamburger-menu.webp" id="toggle"></img>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" id="sg1">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill">
                Skill
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>{" "}
            <li class="nav-item">
              <a class="nav-link" href="/Work">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts">
                Contact
              </a>
            </li>
          </ul>
          <br /><br />

        </div>
      </nav>

      <div class="banner">
        <h1  >I'm <span style={{ color: "#ff6f5c" }}>Surbhi</span> <span className='headh2'>Full Stack Developer</span></h1>

        <p id='s1' class='zoom-in'>Hello! I'm SURBHI, a full-stack web developer with one and a half years of experience
          and a MSC (Master of Computer Science) post-graduate. I have a passion for creating
          dynamic and interactive websites that deliver seamless user experiences. I have gained expertise in a wide range of
          technologies and frameworks, including <b>HTML5, CSS3, JavaScript, React, Node.js, and Mongodb, Bootstrap</b>
        </p>
        <button class="button" >
          <a href={cv} download={cv} target='_blank' style={{ textDecoration: "none", color: "white" }}>DOWNLOAD CV</a></button>
        <div class="social-icons">
          <a href="https://www.facebook.com/surbhi.gulhana"><i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/Surbhi37660177"><i class="fab fa-twitter"></i></a>
          <a href="www.linkedin.com/in/surbhi-gulhana-a23966199"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      <section class="section" id='about'></section>
      <header> <h2>About us </h2></header>
      <section class="section"></section>
      <div class="container">
        <div class="row">
          <div class="column1" id='cc1'>
            Hello! I'm Surbhi, a full-stack web developer with one and a half years of experience
            and a MSC (Master of Computer Science) post-graduate. I have a passion for creating. I have a passion for creating dynamic and interactive websites that deliver seamless user experiences. With my solid foundation in web development and a keen eye for design, I strive to build modern and responsive websites that meet the needs of clients and users alike.<br />
            Throughout my journey as a web developer, I have gained expertise in a wide range of technologies and frameworks, including HTML5, CSS3, JavaScript, React, Node.js, and MongoDB, Bootstrap
            Good experiance working with github,aws

            basic knowledge of (firebase,MySql)

            enjoy working on both front-end and back-end development, as it allows me to bring ideas to life from conceptualization to implementation.
          </div>
          <div class="column1" >
            <img src={about} className='aboutbg' ref={targetDivRef}></img>


          </div>


        </div>
      </div><br /><br />
      <section class="section" id='skill'>

      </section>
      <header>

        <h2>Skills </h2>

      </header>
      <section class="section"></section>
      <div class="container">


        <div class="row">
          <div class="column1" >
            <div class="container" id='cc'>
              <div class="grid-row" ref={targetDivRef1}>
                <div class="grid-item">
                  <img src={r} id='r'></img>

                </div>
                <div class="grid-item">
                  <img src={n} id='r'></img>
                </div>
                <div class="grid-item">
                  <img src={e} id='r'></img>
                </div>
                <div class="grid-item">
                  <img src={m} id='r'></img>
                </div>

                <div class="grid-item">
                  <img src={h} id='h'></img>
                </div>
                <div class="grid-item">
                  <img src={c} id='r'></img>
                </div>
                <div class="grid-item">
                  <img src={b} id='r'></img>
                </div>

              </div>
            </div>
          </div>
          <div class="column1" >
            If you're looking for a passionate and skilled full-stack web developer who can bring your ideas to life, I would love to connect with you. Let's work together to create exceptional web experiences that make a lasting impression.<br />
            ✔ Shopping Web App.<br />

            ✔ Logo Generator Apps.<br />

            ✔ Billing Web App,<br />

            ✔ Pharma management,School management<br />

            ✔ Responsive Portfolio,Landing pages,Chat Bots<br />

            ✔ AWS Server<br />


          </div>


        </div>
      </div>
      <section class="section" id='services'></section>
      <header> <h2>Services </h2></header>
      <section class="section"></section>
      <div class="container">


        <div class="row">
          <div class="column1">
            "With proficiency in modern frameworks, such as React and Node.js, I seamlessly bridge the gap between client-side and server-side development, delivering dynamic and responsive web applications.
            Good experiance working with github,aws

            basic knowledge of (firebase,mongodb)
            <br />
            <div>
              <ul className='ul'>
                <li>✔ ReactJs</li>
                <li>✔ Nodjs</li>
                <li>✔ ExpressJS</li>
                <li>✔ MongoDB</li>
                <li>✔ Bootstrap</li>
                <li>✔ Html</li>
                <li>✔ Css</li>
                <li>✔ Aws</li>

              </ul>
            </div>
          </div>
          <div class="column1" >

            <section  id='cvb' ref={targetDivRef2}>

              <div class="parent-skill">
                <div class="skill">
                  <div class="progress" data-progress="95">
                    <span class="progress-number">0%</span>
                  </div>
                </div>
                <span class="title">React</span>
              </div>

              <div class="parent-skill">
                <div class="skill">
                  <div class="progress" data-progress="85">
                    <span class="progress-number">0%</span>
                  </div>
                </div>
                <span class="title">Node</span>
              </div>

              <div class="parent-skill">
                <div class="skill">
                  <div class="progress" data-progress="80">
                    <span class="progress-number">0%</span>
                  </div>
                </div>
                <span class="title">Express</span>
              </div>

              <div class="parent-skill">
                <div class="skill">
                  <div class="progress" data-progress="90">
                    <span class="progress-number">0%</span>
                  </div>
                </div>
                <span class="title">MongoDB</span>
              </div>
            </section>

          </div>


        </div>
      </div>

      <section class="section"></section>
      <header> <h2>Contact Us</h2></header>
      <section class="section"></section>
      <div class="container" >


        <div class="row">
          <div class="col-6" ><center>   
                   <img src={contact} className='conatctbanner' ref={targetDivRef3}></img></center>

          </div>
          <div class="col-6" >
            <div class="container">


              <div class="contact-form" id='gs1'>

                <form ref={form} onSubmit={sendEmail}>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="from_name" placeholder='Name' required />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="from_email" placeholder='Email' required />
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <textarea id="address" name="message" placeholder='Message' rows="4" required></textarea>
                  </div>
                  <div class="form-group">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>



            </div>


          </div>


        </div>
      </div>
      <section class="section">

      </section>





      <footer class="footer-distributed">

        <div class="footer-right">

          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>

        </div>

        <div class="footer-left">

          <p class="footer-links">
            <a class="link-1" href="/">Home</a>

            <a href="#about">About</a>

            <a href="#skill">Skill</a>

            <a href="#services">Services</a>

            <a href="/work">Work</a>

            <a href="#contacts">Contact</a>
          </p>

          <p>Surbhi Gulhana &copy; 2023</p>
        </div>

      </footer>
    </div>
  )
}

export default Home
