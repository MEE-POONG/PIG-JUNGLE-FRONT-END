import React from 'react'
import { GrHomeRounded, GrFacebook, GrGoogle, GrPhone } from "react-icons/gr";
import { RiLineFill } from "react-icons/ri";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Contactpage() {
    return (
        <div>

            <div className='body'>

                <div>
                    {/* -------title caontact----------- */}
                    <div className='contact'>
                        <p>CONTACTS</p>
                    </div>
                    {/* ------------text title---------- */}
                    <div className="provide">
                        <h3> Pig Jungle Kuncha </h3>
                        <p>—My Contact—</p>
                    </div>
                    {/*--------------- icon --------------*/}
                    <div className='icon'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="icon" >
                                        <p>
                                            <a className='a' > <GrHomeRounded style={{ width: "30px", height: "30px" }} />  </a>
                                            Mittraphap, Pak Chong, Thailand, Nakhon Ratchasima
                                        </p>
                                        <div className="icon" >
                                            <p>
                                                <a className='a' href="https://www.facebook.com/profile.php?id=100084921099285" > <GrFacebook style={{ width: "30px", height: "30px" }} /></a>
                                                Pig Jungle
                                            </p>
                                            <div className="icon" >
                                                <p>
                                                    <a className='a' href="#" > <RiLineFill style={{ width: "30px", height: "30px" }} /></a>
                                                    Pig Jungle
                                                </p>
                                                <div className="icon" >
                                                    <p>
                                                        <a className='a' href="#"><GrGoogle style={{ width: "30px", height: "30px" }} /></a>
                                                        Pig Jungle@gmail.com
                                                    </p>
                                                      <p>
                                                        <a className='a' ><GrPhone style={{ width: "30px", height: "30px" }} /></a>
                                                        065-065-8538
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*--------------- map -----------------*/}
                                <div className="col-md-7">
                                <div className='map'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2298070344245!2d101.40634931445456!3d14.699592178584794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c2bb5aa80c05d%3A0xf0d75169f3e8a461!2sPetrol!5e0!3m2!1sen!2sth!4v1668056782458!5m2!1sen!2sth"
                                        width="700"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------------letter------------------ */}
                    <div className='letter'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <p> Sign up for our fresh news</p>
                                    <h3> Sign up for newsletter </h3>
                                </div>
                                <br />
                                <br />
                                {/*--------------- map -----------------*/}
                                <div className="col-md-6">
                                    <br />
                                    <p>
                                        <br />
                                        <input className="input-email" type="email" name="E-mail" placeholder="Enter Your Email" id="#" />
                                        <input type="submit" value="Sing up" className="input-submit" />
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div>
                <footer className='footer p'>
                    <p> footer </p>
                </footer>
            </div>
        </div>






        // start contact



        // RiLineFill




    )
}


