import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function ProductList() {
    return (
        // style={{backgroundColor: "#fdccbc"}}
        <section className="vh-100"  >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col" style={{backgroundColor: "#fdccbc",}}>
                        <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>
                        <div className="lol mb-4">
                            <div className="lol-body p-4">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                    <Image  src={"images/product4.jpg"} style={{width: "120px"}}/>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Name</p>
                                            <p className="lead fw-normal mb-0">iPad Air</p>

                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                                            <p className="lead fw-normal mb-0"> - 1 +</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Price</p>
                                            <p className="lead fw-normal mb-0">$799</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Total</p>
                                            <p className="lead fw-normal mb-0">$799</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lol mb-5">
          <div className="lol-body p-4">

            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span
                  className="lead fw-normal">$799</span>
              </p>
            </div>

          </div>

        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}