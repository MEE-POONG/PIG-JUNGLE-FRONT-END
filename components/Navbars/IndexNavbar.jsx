import React from "react";
import Link from "next/link";
// import style from './IndexNavbar.module.css';

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Navbar className="header-area header-sticky wow slideInDown" expand="lg" bg="light">
        <Container >
          <Navbar.Brand href="/">
            <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link href="/" className="font-bold">Home</Nav.Link>
              <Nav.Link href="/about" className="font-bold">about</Nav.Link>
              <Nav.Link href="/service" className="font-bold">service</Nav.Link>
              <Navbar.Brand href="/">
                <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
              </Navbar.Brand>
              <Nav.Link href="/gallery" className="font-bold">gallery</Nav.Link>
              <Nav.Link href="/shop" className="font-bold">shop</Nav.Link>
              <Nav.Link href="/contacts" className="font-bold">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
