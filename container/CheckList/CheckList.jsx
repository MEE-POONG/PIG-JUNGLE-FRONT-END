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

                            border: "10px double transparent",
                            backgroundImage: "linear-gradient(#ffffff, #ffffff), radial-gradient(circle at left top, #C33764, #1D2671,#8e54e9)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",

                            animation: "gradient 15s ease infinite",
                            backgroundSize: "400%"
                        }}>
                            <div className="card-body text-black" style={{ backgroundColor: "#ffd9d982" }}>
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase" style={{ textShadow: "-2px -2px 2px rgb(0 255 162), 2px 2px 1px #b224ef" }}>Your products</h3>

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">
                                                <h2>ชื่อสินค้า</h2>
                                                <img src="../../public/images/product/marijuana_06.png"/>
                                                <h4><p>ราคา {price.toLocaleString("en-US")} บาท</p></h4>
                                                


                                            </div>
                                        </div>
                                        <ul>
                                                    <h4>{count}</h4>
                                                    <li type="button" className="bg" onClick={() => setCount((count) => count + 1)}><FaPlus /> </li>
                                                    <li type="button" className="bg" onClick={() => setCount((count) => count - 1)}><FaMinus /> </li>
                                                </ul>


                                        <hr className="mb-4" style={{ height: "2px", backgroundColor: "#1266f1", opacity: "1" }}></hr>

                                        <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: "#e1f5fe" }}>
                                            <h5 className="fw-bold mb-0">Total:</h5>
                                            <h5 className="fw-bold mb-0">2261$</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 px-5 py-4">

                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase " style={{
                                            textShadow: "-2px -2px 2px rgb(0 255 162), 2px 2px 1px #b224ef"
                                        }}>Payment</h3>

                                        <form className="mb-5">
                                            <div className="form-outline mb-5">
                                                <label className="form-label" style={{ color: "#c021dd" }} > Card Number</label>

                                                <input type="text" id="typeText" className="form-control form-control-lg" placeholder="Card Number" />
                                            </div>

                                            <div className="form-outline mb-5">
                                                <label className="form-label" style={{ color: "#c021dd" }}>Name on card</label>

                                                <input type="text" id="typeName" className="form-control form-control-lg"
                                                    placeholder="Name on card" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" style={{ color: "#c021dd" }}>Expiration</label>

                                                        <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="Expiration"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div className="form-outline">
                                                        <label className="form-label" style={{ color: "#c021dd" }}>Cvv</label>

                                                        <input type="password" id="typeText" maxLength={3} className="form-control form-control-lg"
                                                            size="1" placeholder="Cvv" />
                                                    </div>
                                                </div>
                                            </div>


                                            <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>



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