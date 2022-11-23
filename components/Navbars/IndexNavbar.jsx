import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";


export default function IndexNavbar() {

  const [navSize, setNavSize] = useState("6rem")
  const [navColor, setNavColor] = useState("#e936f4")
  const [navLogo, setNavLogo] = useState("140px")

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#e936f4") : setNavColor("#e936f4")
    window.scrollY > 10 ? setNavSize("5rem") : setNavSize("6rem")
    window.scrollY > 10 ? setNavLogo('80px') : setNavLogo('140px')
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  return (
    <>
      <Navbar className={navLogo == "160px" ? "header-area " : "header-area scroll " + " header-sticky"} sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-xl-none d-lg-none">
            <Image src={'images/logo.png'} alt="logo-nav" width={'60px'} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="d-flex align-items-center w-100 text-center">
              <div className="d-lg-flex w-40 justify-content-center">
                <Nav.Link href="/" className="font-menu font-bold mx-auto">
                  <div className="active">หน้าแรก</div>
                  <div className="n-active">หน้าแรก</div>
                </Nav.Link>
                <Nav.Link href="/product" className="font-menu font-bold mx-auto">
                  <div className="active">ร้านค้า</div>
                  <div className="n-active">ร้านค้า</div>
                </Nav.Link>
                <Nav.Link href="/about" className="font-menu font-bold mx-auto">
                  <div className="active">เกี่ยวกับเรา</div>
                  <div className="n-active">เกี่ยวกับเรา</div>
                </Nav.Link>
              </div>
              <Navbar.Brand href="/" className="logo-main d-none d-xl-block d-lg-block d-flex mx-auto w-20">
                <Image src={'images/logo.png'} alt="logo-nav" width={navLogo} style={{ transition: "all 0.5s" }} />
              </Navbar.Brand>
              <div className="d-lg-flex w-40 justify-content-center">
                <Nav.Link href="/Contact" className="font-menu font-bold mx-auto">
                  <div className="active">ติดต่อ</div>
                  <div className="n-active">ติดต่อ</div>
                </Nav.Link>
                <Nav.Link href="/sign_in" className="font-menu font-bold mx-auto">
                  <div className="active">เข้าสู่ระบบ</div>
                  <div className="n-active">เข้าสู่ระบบ</div>
                </Nav.Link>
                <Nav.Link href="/sign_up" className="font-menu font-bold mx-auto">
                  <div className="active">สมัครสมาชิก</div>
                  <div className="n-active">สมัครสมาชิก</div>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
