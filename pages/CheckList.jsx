import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function CheckListpage() {
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" style={{ borderRadius: "15px" }}>
                            <div className="card-body text-black">
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">

                                            </div>

                                            <div className="flex-grow-1 ms-3">
                                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                <h5 className="text-primary">Samsung Galaxy M11 64GB</h5>
                                                <h6 style={{ color: "#9e9e9e" }}>Color: white</h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                                                    <div className="def-number-input number-input safari_only">
                                                        <button 
                                                            className="minus"></button>
                                                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                            type="number" />
                                                        <button 
                                                            className="plus"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                                <h5 className="text-primary">Headphones Bose 35 II</h5>
                                                <h6 style={{ color: "#9e9e9e" }}>Color: Red</h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                                                    <div className="def-number-input number-input safari_only">
                                                        <button 
                                                            className="minus"></button>
                                                        <input className="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                            type="number" />
                                                        <button
                                                            className="plus"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}