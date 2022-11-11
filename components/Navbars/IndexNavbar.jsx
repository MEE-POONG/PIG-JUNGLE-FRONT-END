import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';


export default function IndexNavbar() {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navSize, setNavSize] = useState("6rem")
  const [navColor, setNavColor] = useState("#000000")
  // const [navTextColor, setNaveTextColor] = useState("linear-gradient(red, yellow)")
  const [navLogo, setNavLogo] = useState("160px")

  const listenScrollEvent =() =>{
    window.scrollY > 10 ? setNavColor("#222b21") : setNavColor("#000000")
    window.scrollY > 10 ? setNavSize("5rem") : setNavSize("6rem")
    // window.scrollY > 10 ? setNaveTextColor('#0c3e0d') : setNaveTextColor('#ffff')
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
    <section className="topNavbar d-flex">
      <div className="topNavbar-red flex-fill">
      </div>
      <div className="topNavbar-yellow flex-fill">
      </div>
      <div className="topNavbar-green flex-fill">
      </div>
    </section>
      <Navbar style={{backgroundColor: navColor,height: navSize, transition:"all 0.5s"}} className="header-area header-sticky wow slideInDown" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-xl-none d-lg-none">
            <Image src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex align-items-center w-100 text-center">
                <div className="d-lg-flex w-40 justify-content-center">
                  <Nav.Link href="/" className="font-menu font-bold mx-2">หน้าแรก</Nav.Link>
                  <Nav.Link href="/product" className="font-menu font-bold mx-2">ร้านค้า</Nav.Link>
                  <Nav.Link href="/about" className="font-menu font-bold mx-2">เกี่ยวกับเรา</Nav.Link>
                </div>
                <Navbar.Brand href="/" className="logo-main d-none d-xl-block d-lg-block d-flex mx-auto w-20">
                  <Image src={'images/logo.png'} alt="logo-nav" width={navLogo} style={{transition:"all 0.5s"}}/>
                </Navbar.Brand>
                <div className="d-lg-flex w-40 justify-content-center">
                  <Nav.Link href="/contact" className="font-menu font-bold mx-2">ติดต่อ</Nav.Link>
                  <Nav.Link href="/login" className="font-menu font-bold mx-2">เข้าสู่ระบบ</Nav.Link>
                  <Nav.Link href="/register" className="font-menu font-bold mx-2">สมัครสมาชิก</Nav.Link>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
