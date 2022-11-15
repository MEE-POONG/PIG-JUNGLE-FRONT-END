import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function About() {
    return (
        <>

            <header>
                <div className="sc_layouts_title_caption">
                    <h1 >About 1</h1>
                    <p>HOME / ABOUT</p>
                </div>
            </header>
            <Container>
                <Row>
                    <Col md={12} lg={6} sm={6}>
                        <div className="products">
                            <h3>
                                We provide
                                <br />high-quality
                                organic <br />products
                            </h3>
                            <p>—Our company—</p>
                        </div>
                        <p className="work">Our core values guide us in how we conduct ourselves—
                            <br />personally and professionally. In this ever-changing world of
                            <br />agriculture, our core values are constant. They underlie our work,
                            <br />how we interact with each other and which strategies we employ
                            <br />to fulfill our mission. </p>

                        <p className="work">We continue to develop our capacities.
                            Even more fruits
                            <br />and vegetables will be grown
                            and gathered in the nearest future.
                            <br />The total number of our livestock is also increasing.

                        </p>
                        <div className="col-xl-9 mx-auto">
                            <a href="#"
                                className="mm">MORE ABOUT US</a>
                        </div>
                    </Col>
                    <Col md={12} lg={6} sm={6}>
                        <header className="will">
                            <div className="numder">
                                <Image className="logo" style={{ borderRadius: "10px" }} src={"images/product/product4.jpg"} />
                            </div>

                        </header>
                    </Col>
                </Row>
            </Container>
            <section className="call-to-action text-white text-center">
                <dvi className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="mb-4">Enjoy Our Products</h2>
                            <a href="#" className="button-shop">MORE ABOUT US</a>
                        </div>
                    </div>

                </dvi>
            </section>









            {/* <div className="view">
                <div className="background-text">
                    <div className="text">

                        <div className="titel">—Our company—</div>
                        <div className="script">Enjoy Our Products</div>
                        <a href="#" className="grown">MORE ABOUT US</a>
                    </div>


                </div>
                <Image className="lgo" src={"images/product/product12.jpg"} />

            </div> */}






        </>

    )
}