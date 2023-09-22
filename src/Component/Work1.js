import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Work1 = () => {

    const location = useLocation();
    console.log(location.state[0].img)
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
            {/* slider */}


            <div class="tz-gallery">

                <div class="row">

                    <div class="col-sm-12 col-md-4">
                        <a class="lightbox" href={location.state[0].img}>
                            <img src={location.state[0].img} alt="Bridge" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a class="lightbox" href={location.state[1].img}>
                            <img src={location.state[1].img} alt="Park" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a class="lightbox" href={location.state[3].img}>
                            <img src={location.state[3].img} alt="Tunnel" />
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-8">
                        <a class="lightbox" href={location.state[2].img}>
                            <img src={location.state[2].img} alt="Traffic" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a class="lightbox" href={location.state[4].img}>
                            <img src={location.state[4].img} alt="Coast" />
                        </a>
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

export default Work1
