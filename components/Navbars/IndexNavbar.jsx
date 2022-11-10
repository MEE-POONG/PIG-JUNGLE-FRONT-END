import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navSize, setNavSize] = useState("6rem")
  const [navColor, setNavColor] = useState("transparent")
  const [navTextColor, setNaveTextColor] = useState("#31b934")
  const [navLogo, setNavLogo] = useState("160px")

  const listenScrollEvent =() =>{
    window.scrollY > 10 ? setNavColor("#ace1af") : setNavColor("transparent")
    window.scrollY > 10 ? setNavSize("5rem") : setNavSize("6rem")
    window.scrollY > 10 ? setNaveTextColor('#0c3e0d') : setNaveTextColor('#31b934')
    window.scrollY > 10 ? setNavLogo('90px') : setNavLogo('160px')
  };
  useEffect(() =>{
      window.addEventListener("scroll", listenScrollEvent)
    return () =>{
      window.removeEventListener("scroll",listenScrollEvent)
    }
  }, [])

  return (
    <>
    <section className="topNavbar">

    </section>
      <Navbar style={{backgroundColor: navColor,height: navSize, transition:"all 0.5s"}} className="header-area header-sticky wow slideInDown" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-xl-none d-lg-none">
            <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex align-items-center mx-auto w-100">
                <div className="d-lg-flex left-menu">
                  <Nav.Link href="/" className="font-menu font-bold mx-2" style={{color: navTextColor }}>หน้าแรก</Nav.Link>
                  <Nav.Link href="/shop" className="font-menu font-bold mx-2" style={{color: navTextColor }}>ช็อปปิ้ง</Nav.Link>
                  <Nav.Link href="/about" className="font-menu font-bold mx-2" style={{color: navTextColor }}>เกี่ยวกับเรา</Nav.Link>
                </div>
                <Navbar.Brand href="/" className="logo-main d-none d-xl-block d-lg-block d-flex mx-auto">
                  <Image src={'images/logo.png'} alt="logo-nav" width={navLogo} style={{transition:"all 0.5s"}}/>
                </Navbar.Brand>
                <div className="d-lg-flex right-menu">
                  <Nav.Link href="/contact" className="font-menu font-bold mx-2" style={{color: navTextColor }}>ติดต่อ</Nav.Link>
                  <Nav.Link href="/login" className="font-menu font-bold mx-2" style={{color: navTextColor }}>เข้าสู่ระบบ</Nav.Link>
                  <Nav.Link href="/signin" className="font-menu font-bold mx-2" style={{color: navTextColor }}>สมัครสมาชิก</Nav.Link>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
