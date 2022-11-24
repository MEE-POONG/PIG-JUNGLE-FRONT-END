import { useState } from "react";
import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

export default function CheckList() {
    let priceDefult = 150
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(priceDefult)

    const countIncreat = () => {
        if (count >= 1) {
            setCount((count) => count + 1)
            setPrice((price) => price + priceDefult)
        }
    }

    const countDecreat = () => {
        if (count > 1) {
            setCount((count) => count - 1)
            setPrice((price) => price - priceDefult)
        }
    }
    return (
        <section className="h-100 h-custom" >
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" style={{
                            border: "3px double transparent",
                            backgroundImage: "linear-gradient(rgb(10, 7, 49), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(117, 255, 142), rgb(162, 119, 255))",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            color: "#ffff"
                        }}>
                            <div className="card-body text-black" >
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        
                                        <div className='title-header mx-auto mb-5 pt-2 text-center fw-bold text-uppercase'>
                                            <div className="active" style={{fontSize: "xx-large"}}>Your products</div>
                                            <div className="n-active" style={{fontSize: "xx-large"}}>Your products</div>
                                        </div>
                                        <h4 className="" style={{ color: "#ffff" }}>ชื่อสินค้า</h4>
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0 w-100 d-flex justify-content-end" >

                                                <Image className="logo" style={{ width: "30%" }} src={"images/product/product4.jpg"} />


                                                <div className="flex-grow-1 ms-3 " style={{ color: "#ffff" }}>
                                                    <h4><p className="fw-bold mb-0 me-5 pe-3 d-flex flex-row-reverse" > {price.toLocaleString("en-US")} บาท</p></h4>

                                                    <ul className="d-flex justify-content-around" >

                                                        <li type="button" className="bg" onClick={() => setCount((count) => count + 1)}>+ </li>
                                                        <h4>{count}</h4>
                                                        <li type="button" className="bg" onClick={() => setCount((count) => count - 1)}>- </li>
                                                    </ul>

                                                </div>

                                            </div>
                                        </div>


                                        <hr className="mb-4" style={{ color: "#ffff" }}></hr>

                                        <div className="d-flex justify-content-between p-2 mb-2" style={{ color: "#ffff" }}>
                                            <h5 className="fw-bold mb-0">ราคารวมทั้งหมด :</h5>
                                            <h5 className="fw-bold mb-0">2261 บาท</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 px-5 py-4" style={{ color: "#ffff" }}>

                                        
                                        <div className='title-header mx-auto mb-5 pt-2 text-center fw-bold text-uppercase'>
                                            <div className="active" style={{fontSize: "xx-large"}}>Payment</div>
                                            <div className="n-active" style={{fontSize: "xx-large"}}>Payment</div>
                                        </div>
                                        <form className="mb-5">
                                            <div className="form-outline mb-5">
                                                <label className="form-label" > Card Number</label>

                                                <input type="text" id="typeText" className="form-control form-control-lg" placeholder="Card Number" />
                                            </div>

                                            <div className="form-outline mb-5">
                                                <label className="form-label" >Name on card</label>

                                                <input type="text" id="typeName" className="form-control form-control-lg"
                                                    placeholder="Name on card" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" >Expiration</label>

                                                        <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="Expiration"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" >Cvv</label>

                                                        <input type="password" id="typeText" maxLength={3} className="form-control form-control-lg"
                                                            size="1" placeholder="Cvv" />
                                                    </div>
                                                </div>
                                            </div>

                                            <a className='btunav'  type='SignIn' href="/product">กลับ</a>
                                            <a className='btunav' >ตกลง</a>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}