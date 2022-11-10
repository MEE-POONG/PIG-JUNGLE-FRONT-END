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
                <div className="provide">
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
            </header>
            <header className="will">
                <div className="numder">
                    <Image className="logo" src={"images/product4.jpg"}
                    />
                </div>
                <Button className="mm">
                MORE ABOUT US
            </Button>
            </header>
            <div className="best">
                <h1 >
                The best of professionals
                </h1>
                <p>—Our Team—</p>
            </div>


        </>

    )
}