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
                    <Col md={12} lg={6}>
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
                        <a href="#"
                            className="mm">MORE ABOUT US</a>
                    </Col>
                    <Col md={12} lg={6}>
                        <header className="will">
                            <div className="numder">
                                <Image className="logo" src={"images/product4.jpg"} />
                            </div>

                        </header>
                    </Col>
                </Row>
            </Container>

            <div className="view">
                <Image className="lgo" src={"images/product12.jpg"} />
                <div className="fresh">Enjoy Our Products</div>
                <div className="fresh-our">—Our company—</div>
                <div className="grown">MORE ABOUT US</div>


            </div>
            {/* <Image className="back-logo" src={"images/product5.jpg"} />
                <div className="back">
                
                <h1>Enjoy Our Products</h1>
                <p>Organic Fresh Products</p>
                
            </div>
            
                <p className="shop-now">SHOP NOW</p> */}





        </>

    )
}