import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Work = () => {

    let imgdata = require('../data.json');
    const navigate = useNavigate();

    console.log(imgdata)
    function Omgdata(e) {
        var hjid = e.target.value
        console.log(hjid)
        const getStatedata = imgdata.find(id => id.img_id === hjid).images;
        console.log(getStatedata[1].img)
        navigate('/Work1', { state: getStatedata })
    }


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
            <div class="container mx-auto mt-4 " >
                <div class="row" id='sg' >




                    <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/papper.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Shopping App</h5>

                                <p class="card-text">Shopping web app including all modern functionality responsive userinter face.</p>
                                <center>
                                    <button class="button" id="bt" onClick={Omgdata} value={"1"} >
                                        Read More</button></center>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/logo.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Logo Generator</h5>

                                <p class="card-text">Online Logo Generator with all edit title logo color ,bgcolor functionality</p>
                                <center>
                                    <button class="button" id="bt" onClick={Omgdata} value={"6"} >
                                        Read More</button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/Screenshot (647).png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lash Supply</h5>

                                <p class="card-text">App dashboard for buy and sell lashes online with fully customize dashboard for admin.</p>
                                <center>
                                    <button class="button" id="bt" onClick={Omgdata} value={"3"} >
                                        Read More</button></center>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/Screenshot (639).png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Pharma Management</h5>

                                <p class="card-text">Pharma Management system web app dashboard.</p>
                                <center>
                                    <button class="button" id="bt" onClick={Omgdata} value={"2"} >
                                        Read More</button></center>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ecommerce Web</h5>
                               
                                <p class="card-text">Shopping web app Fully responsive web app for all screen sizesy.</p>
                                <center>
                                    <button class="button" id="bt" >
                                        <a href="#" style={{ textDecoration: "none", color: "white" }}>Read More</a></button></center>
                            </div>
                        </div>
                    </div> */}

                    <div class="col-md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/web.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Company Website</h5>

                                <p class="card-text">Fully responsive Website based on React and Bootstrap.</p>
                                <center>
                                    <button class="button" id="bt" onClick={Omgdata} value={"7"} >
                                        Read More</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
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

export default Work
