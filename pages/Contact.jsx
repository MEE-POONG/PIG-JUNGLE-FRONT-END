// import IndexNavbar from "PigJungle-main/components/Navbars/IndexNavbar";
import React from 'react'
import { FcPhone, FcGoogle, FcHome, FcInvite } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { RiLineFill } from "react-icons/ri";



export default function Contactpage() {
    return (
        <div>
            <div className='body'>

                <div>
                    {/* header caontact */}
                    <div className='contact'>
                        <p>HOME - CONTACTS</p>
                    </div>
                    {/* text title */}
                    <div className="provide">
                        <h3> Pig Jungle Kuncha </h3>
                        <p>—My Contact—</p>
                    </div>
                    {/* icon */}
                    <div className='icon p'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <a className='a' > <p> <FcHome style={{ width: "30px", height: "30px" }} /> Address : มิตรภาพ, Pak Chong, Thailand, Nakhon Ratchasima</p> </a>
                                    <a className='a' href="https://www.facebook.com/profile.php?id=100084921099285" > <p> <FaFacebook style={{ width: "30px", height: "30px" }} /> Facebook : Pig Jungle </p> </a>
                                    <a className='a' href="#" > <p> <RiLineFill style={{ width: "30px", height: "30px" }} /> Line : Pig Jungle </p> </a>
                                    <a className='a' href="#"> <p> <FcGoogle style={{ width: "30px", height: "30px" }} /> Email : Pig Jungle@gmail.com </p> </a>
                                    <a className='a' > <p> <FcPhone style={{ width: "30px", height: "30px" }} /> tel : 065-065-8538 </p> </a>

                                </div>
                                <br />
                                <br />
                                {/* map */}
                                <div className="col-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2298070344245!2d101.40634931445456!3d14.699592178584794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311c2bb5aa80c05d%3A0xf0d75169f3e8a461!2sPetrol!5e0!3m2!1sen!2sth!4v1668056782458!5m2!1sen!2sth"
                                        width="600"
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
                    {/* letter */}
                    <div className='letter'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h3> Sign up for our fresh news </h3>
                                    <p>Sign up for newsletter</p> 

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                </div>
            </div>
            <footer className='footer p'>
                <p> footer </p>
            </footer>
        </div>






        // start contact



        // RiLineFill




    )
}


