import React from "react";
import { Image } from "react-bootstrap";
import { FaBehance, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsLine } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className="footer-dec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about footer-item">
                <div className="logo">
                  <a href="#">
                    <Image
                      src={"images/logo.png"}
                      alt="Pig Jungle"
                      width={"60px"}
                    />
                  </a>
                </div>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100084921099285">
                      <i className="fa">
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://line.me/R/ti/p/@454ywxhx">
                      <i className="fa">
                        <BsLine />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/14%C2%B037'12.1%22N+101%C2%B024'25.9%22E/@14.6199651,101.4063951,19.5z/data=!4m5!3m4!1s0x0:0x8d6c90804ab39f00!8m2!3d14.62003!4d101.407198?hl=th-TH">
                      <i className="fa">
                        <SiGooglemaps />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="services footer-item">
              <h4>Pig Jungle</h4>
                <p>มิตรภาพ, Pak Chong, Thailand, Nakhon Ratchasima</p>
                <p>TEL : 065 065 8538</p>
                <p> EMAIL:Pig_jungle@gmail.com</p>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="community footer-item">
                <h4>ร้านเราเปิดทุกวัน</h4>
              
                  <p>เปิดเวลา 11:00 - 00:00 น. </p>
                  <p></p>
                  <form action="#" method="get">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email"
                    required=""
                  />
                  <button
                    type="submit"
                    id="form-submit"
                    className="main-button "
                  >
                    <i className="fa fa-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  <a
                    rel="nofollow"
                    href="https://www.meepoong.com/"
                    title="ME PROMPT TECHNOLOGY COMPANY LIMITED"
                  >
                    ME PROMPT TECHNOLOGY COMPANY LIMITED
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
