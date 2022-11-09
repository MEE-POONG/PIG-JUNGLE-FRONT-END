import React from "react";
import Link from "next/link";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <div className="topNavbar">
    </div>
      <Navbar className="header-area header-sticky wow slideInDown" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-xl-none d-lg-none">
            <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <div className="d-lg-flex left-menu">
                <Nav.Link href="/" className="font-menu font-bold mx-2 my-auto">Home</Nav.Link>
                <Nav.Link href="/shop" className="font-menu font-bold mx-2 my-auto">shop</Nav.Link>
                <Nav.Link href="/about" className="font-menu font-bold mx-2 my-auto">about</Nav.Link>
              </div>
                <Navbar.Brand href="/" className="logo-main d-none d-xl-block d-lg-block">
                  <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
                </Navbar.Brand>
                <div className="d-lg-flex right-menu">
                  <Nav.Link href="/contact" className="font-menu font-bold mx-2 my-auto">contact</Nav.Link>
                  <Nav.Link href="/login" className="font-menu font-bold mx-2 my-auto">login</Nav.Link>
                  <Nav.Link href="/signin" className="font-menu font-bold mx-2 my-auto">sign in</Nav.Link>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
