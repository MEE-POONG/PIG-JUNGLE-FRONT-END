import React from "react";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";

export default function ProductShow() {
    return(
         
        <div className="product-page"> 

            <div className="activ">สินค้าของเรา</div>
            <div className="n-active">สินค้าของเรา</div>
 
        {/* -----start content----- */}
        <div className="container">
        <hr  />
        <br />
                <div className="row">
                <div className="col-md-2">
                    <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                            <i> <BiSearchAlt2/> </i>
                            </span>
                    </div>
                    <div className="type-card">
                        <h4>ประเภทสินค้า</h4> <hr />
                            <p>อุปกรณ์</p>
                            <p>เมล็ดกัญชา</p>
                            <p>เสื้อยืด</p>
                    </div>
                            
                </div>

            {/* row left-col */}
                <div className="col-md-10">
                    <div className="row">

                    <div className="col-sm-3">
                    <div className="product-card">
                        <div className="left">
                            <Image src={'images/product/marijuana_07.png'} className='img-product' alt="imgProduct"/>
                        </div>
                        <div className="right">
                            <div className="product-info">
                            <div className="product-name">
                                <h3>PicJungle</h3>
                            </div>
                            <div className="details">
                                <i>ใบกัญชา</i>
                                <h2>Gorilla purple</h2>
                                <h5>- hybrid indica
                                    <br />- THC 17%
                                    <br />- effects. หิว ง่วงนอน
                                   <br /> - กลิ่นรสชาติ. หวาน เบอร์รี่ องุ่น</h5>
                                <h4><p>ราคา......บาท</p></h4>
                            </div> 
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
                </div>
            {/* end left-col */}   


                    </div>
                    <div>

                </div>
               
            </div> 
             
                    <footer className="foot">
                    <a>Pic Jungle</a>
                    </footer>  
        </div>

        
    )
    
}