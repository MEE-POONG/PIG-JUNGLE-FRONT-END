import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsFacebook, BsMailbox2 } from "react-icons/bs";




export default function Contactpage() {
    return (
        <div>
            {/* header caontact */}
            <div className='contact'>
                <p>HOME - CONTACTS</p>
            </div>
            {/* text title */}
            <div className="provide">
                <h3> Feel free to contact us </h3>
                <p>—Contact Form—</p>
            </div>
            {/* icon */}
            <div className='icon p'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <a href="https://www.facebook.com/profile.php?id=100084921099285"> <p> <BsFacebook /> facebook : Pig Jungle </p> </a>
                            <a href="https://www.facebook.com/profile.php?id=100084921099285"> <p> <BsMailbox2 /> Email : Pig Jungle </p> </a>
                        </div>
                        <div className="col">
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
            <br />
            <br />
            {/* footer */}
            <footer className='footer'>
                <p> footer </p>
            </footer>
        </div>






        // start contact








    )
}


