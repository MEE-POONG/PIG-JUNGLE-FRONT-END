import React from "react";
// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import IndexLayout from "../layouts/IndexLayout";

export default function Productpage() {
    return(
         
        <div className="divbg"> 

            <div className="bgbaner">
                <h1 className="title">Product</h1>
                <a className="text.a"  href="#">HOME</a>
                <span >/ PRODUCT </span>


            </div>
        
        {/* start content */}
        <div className='content'>
        <h1 className="top"> Product </h1>
        <hr />
        <br />

              
                <div className="row">
                <div className="col-md-3">
                    <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                            <i> <BiSearchAlt2/> </i>
                            </span>
                    </div>

                        <h3>ประเภทสินค้า</h3> <hr />
                            <p>อุปกรณ์</p>
                            <p>เมล็ดกัญชา</p>
                            <p>เสื้อยืด</p>
                     
                            
                </div>

            {/* row left-col */}
                <div className="col-md-9">
                    <div className="row">
                    <div className="col-sm-3">
                    <div className="card">
                        <Image className="img" src={'images/product.jpg'} alt="product1" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="card">
                        <Image className="img" src={'images/product2.jpg'} alt="product2" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า2</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="card">
                        <Image className="img" src={'images/product3.jpg'} alt="product3" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า3</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <Image className="img" src={'images/product3.jpg'} alt="product3" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า4</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                            
                    </div>
                </div>
                {/* end row1 */}
                <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product5.jpg'} alt="product5" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า5</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product6.jpg'} alt="product6" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า6</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product7.jpg'} alt="product7" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า7</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                    <Image className="img" src={'images/product8.jpg'} alt="product8" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า8</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                </div>
            {/* end row2 */}

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product9.jpg'} alt="product9" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า9</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product10.jpg'} alt="product10" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า10</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn btn">ใส่ตะกร้า</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <Image className="img" src={'images/product11.jpg'} alt="product11" width={'100px'}/>
                            <div className="card-body">
                                <h5 className="card-title">สินค้า11</h5>
                                <p className="card-text">อธิบายสินค้า.</p>
                                <a href="#" className="btn">ใส่ตะกร้า</a>
                            </div>
                            </div>        
                        </div>
                        {/* <div className="col-sm-3">col12</div> */}
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
Productpage.layout = IndexLayout;