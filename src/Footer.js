import React from 'react';
// import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faMapMarker,faPhone,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (

        <div className="mt-4">
             <div className="footer-container">
                <div >
                    <div className="row row2">

                        <div className="col-md-5">
                            <div class="row g-3 align-items-center mt-3">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Search</label>
                                </div>
                                <div class="col-auto">
                                    <input type="Search" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                        Must Be input  6-8 Characters.
                                    </span>
                                </div>
                            </div>


                            <div>
                                <div className="left-container text-start mt-4">
                                    <hr />
                                    
                                    <p >
                                        <h6> <FontAwesomeIcon icon={faMapMarker} style={{color:"#8d2a2a", fontSize:"20px"}}></FontAwesomeIcon>Address: Nikunja 2, Khilkhet, Dhaka-1229</h6>
                                        <h6> <FontAwesomeIcon icon={faPhone} style={{color:"#8d2a2a", fontSize:"20px"}}></FontAwesomeIcon>Cell: +8801800000000</h6>
                                        <h6> <FontAwesomeIcon icon={faEnvelopeSquare} style={{color:"#8d2a2a", fontSize:"20px"}}></FontAwesomeIcon>Email: nayeem01mehedi@gmail.com</h6>

                                    </p>


                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            <div className="footer-menu-container">
                                <ul className="mt-4">
                                    <h2>SOCIAL SITE</h2>


                                    <div className="flex flex-col items-center justify-center py-2 min-h-screen g-4">
                                    
                                        <FontAwesomeIcon icon={faGithubSquare} style={{fontSize:"30px"}}></FontAwesomeIcon>
                                        <br />                            
                                        <FontAwesomeIcon icon={faLinkedin} style={{color:"blue",fontSize:"30px"}}> </FontAwesomeIcon>
                                        
                                        <br />
                                        <FontAwesomeIcon icon={faInstagramSquare} style={{color:"red",fontSize:"30px"}}></FontAwesomeIcon>
                                        <br />
                                        <FontAwesomeIcon icon={faFacebook} style={{color:"skyblue", fontSize:"30px"}}> </FontAwesomeIcon>
                                        <br />

                                    </div>

                                </ul>
                            </div>

                        </div>



                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul className="mt-3">
                                    <h2 style={{fontSize:"25px"}}>WEBSITE VIEW</h2>
                                    <hr />
                                    <li className="footer-menu" > <a style={{color:"White",textDecoration:"none" }} href=" ">LOGIN</a> </li>
                                    <li className="footer-menu" > <a  style={{color:"White" ,textDecoration:"none"}}href=" ">TRAINER</a> </li>
                                    <li className="footer-menu" > <a style={{color:"White" ,textDecoration:"none"}} href=" ">DRIVER</a> </li>
                                    <li className="footer-menu" > <a style={{color:"White",textDecoration:"none" }}href=" ">ADMIN</a> </li>
                                </ul>
                            </div>
                        </div>








                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", fontWeight: "bold", paddingTop: "30px" }}><small> ©copyright By  <span style={{ color: "#9f1717" }}> Nayeem Mehedi </span>@ HERO RIDER</small></p>


        </div>

    );

};

export default Footer;