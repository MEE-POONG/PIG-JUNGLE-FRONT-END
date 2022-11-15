import React from "react";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import { TbCurrencyBaht } from "react-icons/tb";
import { FaShoppingBasket,  FaShoppingCart} from "react-icons/fa";


export default function ProductShow() {
    return(
         
        <div className="product-page"> 

        
 
        {/* -----start content----- */}
        <div className="container ">
            <br />
            <h2>สินค้าของเรา</h2>
        <hr  />
        <br />
                <div className="row row-1">
                <div className="col-md-2">
                    <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                            <i> <BiSearchAlt2/> </i>
                            </span>
                    </div>
                    <hr />
                        <h4>ประเภทสินค้า</h4>
                            <p>อุปกรณ์</p>
                            <p>เมล็ดกัญชา</p>
                            <p>เสื้อยืด</p>
                </div>

            {/* row right-col */}
                <div className="col-md-10">
                    <Row>
                        <Col  xs={12} sm={6} md={4} lg={3}>
                            <div className="card">
                            <Image className="img" src={'images/product/marijuana_01.png'} alt="product1" width={'100px'}/>
                            <div class="details">
                                <h3>Eleven rosé</h3>
                                <h5>Men Black Sneakers</h5>
                                <h6><span class="fa fa-dollar"></span>150</h6>
                                <h6 class="dis"><span><TbCurrencyBaht/></span>200</h6>
                                </div> 
                                    <span class="foot"><i><FaShoppingBasket/></i>Buy Now</span>
                                    <span class="foot"><i><FaShoppingCart/></i>Add TO Cart</span>
                        </div>
                        </Col>

                        <Col  xs={12} sm={6} md={4} lg={3}>
                            <div className="card">
                            <Image className="img" src={'images/product/marijuana_02.png'} alt="product1" width={'100px'}/>
                            <div class="details">
                                <h3>Eleven rosé</h3>
                                <h5>Men Black Sneakers</h5>
                                <h6><span class="fa fa-dollar"></span>150</h6>
                                <h6 class="dis"><span><TbCurrencyBaht/></span>200</h6>
                                </div> 
                                    <span class="foot"><i><FaShoppingBasket/></i>Buy Now</span>
                                    <span class="foot"><i><FaShoppingCart/></i>Add TO Cart</span>
                        </div>
                        </Col>

                        <Col  xs={12} sm={6} md={4} lg={3}>
                            <div className="card">
                            <Image className="img" src={'images/product/marijuana_03.png'} alt="product1" width={'100px'}/>
                            <div class="details">
                                <h3>Eleven rosé</h3>
                                <h5>Men Black Sneakers</h5>
                                <h6><span class="fa fa-dollar"></span>150</h6>
                                <h6 class="dis"><span><TbCurrencyBaht/></span>200</h6>
                                </div> 
                                    <span class="foot"><i><FaShoppingBasket/></i>Buy Now</span>
                                    <span class="foot"><i><FaShoppingCart/></i>Add TO Cart</span>
                        </div>
                        </Col>
                    </Row>
                   

                   
            {/* end row2 */}

        
                </div>
            {/* end right-col */}   


                    </div>
                    <div>

                </div>
               
            </div> 
             
                    {/* <footer className="foot">
                    <a>Pic Jungle</a>
                    </footer>   */}
        </div>

        
    )
    
}