import IndexNavbar from "@/components/Navbars/IndexNavbar";
import React from "react";
// import Link from "next/link";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Productpage() {
    return(
          
        <div>
             
            <div className="bgbaner">
                <h1 >Product</h1>
                <p>HOME / ABOUT</p>
            </div>
        
        <div className='container'>
        <h1> รายการสินค้า </h1>
        <br />
            <div className='row'>
                <div className="col-sm">
                1
                    <div className="card">
                        <Image className="card-img-top" src={'images/product.jpg'} alt="product1" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col-sm">
                2
                    <div className="card">
                    <Image className="card-img-top" src={'images/product2.jpg'} alt="product2" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col-sm">
                3
                    <div className="card">
                    <Image className="cardimg" src={'images/product3.jpg'} alt="product3" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>
                
            </div>

            <div className='row'>
                <div className="col-sm">
                4
                    <div className="card">
                    <Image className="card-img-top" src={'images/product4.jpg'} alt="product4" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col-sm">
                5
                    <div className="card">
                    <Image className="card-img-top" src={'images/product5.jpg'} alt="product5" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col-sm">
                6
                    <div className="card">
                    <Image className="card-img-top" src={'images/product6.jpg'} alt="product6" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn-primary">เพิ่มใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>
            </div>
            

            </div>
        </div>
        
    )
    
}
 