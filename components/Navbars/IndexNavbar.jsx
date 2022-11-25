import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// components
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { FaBars, FaSearch, FaShoppingCart, FaUser, FaUserAlt } from "react-icons/fa";


export default function IndexNavbar() {

  const { asPath } = useRouter();


  const [navLogo, setNavLogo] = useState("140px")
  const [cartItems, setCartItems] = useState([])

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavLogo('80px') : setNavLogo('140px')
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('cartItems'))
      if (items) {
        setCartItems(items)
      }
  }, [cartItems])


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
                <Nav.Link href="/" className={asPath === '/' ? "active font-menu font-bold mx-auto" : " font-menu font-bold mx-auto"}>
                  <div className="active">หน้าแรก</div>
                  <div className="n-active">หน้าแรก</div>
                </Nav.Link>
                <Nav.Link href="/product" className={asPath === '/product' ? "active font-menu font-bold mx-auto" : " font-menu font-bold mx-auto"}>
                  <div className="active">ร้านค้า</div>
                  <div className="n-active">ร้านค้า</div>
                </Nav.Link>
                <Nav.Link href="/about" className={asPath === '/about' ? "active font-menu font-bold mx-auto" : " font-menu font-bold mx-auto"}>
                  <div className="active">เกี่ยวกับเรา</div>
                  <div className="n-active">เกี่ยวกับเรา</div>
                </Nav.Link>
              </div>
              <Navbar.Brand href="/" className="logo-main d-none d-xl-block d-lg-block d-flex mx-auto w-20">
                <Image src={'images/logo.png'} alt="logo-nav" width={navLogo} style={{ transition: "all 0.5s" }} />
              </Navbar.Brand>
              <div className="d-lg-flex w-40 justify-content-center">
                <Nav.Link href="/Contact" className={asPath === '/Contact' ? "active font-menu font-bold mx-auto" : " font-menu font-bold mx-auto"}>
                  <div className="active">ติดต่อ</div>
                  <div className="n-active">ติดต่อ</div>
                </Nav.Link>
                <Nav.Link href="/sign_in" className={asPath === '/sign_in' ? "active font-menu font-bold mx-auto" : " font-menu font-bold mx-auto"}>
                  <div className="active">เข้าสู่ระบบ</div>
                  <div className="n-active">เข้าสู่ระบบ</div>
                </Nav.Link>
                <div className="d-inline-flex mx-auto">
                  <Nav.Link href="#" className="font-menu font-bold mx-auto">
                    <FaSearch/>
                  </Nav.Link>
                  <Nav.Link href="/#" className="font-menu font-bold mx-auto">
                    <FaUser/>
                  </Nav.Link>
                  <Nav.Link href="/basket" className="font-menu font-bold mx-auto">
                    <span className="me-1">{cartItems.length ===0 ? ('') : (cartItems.length)}</span>
                    <FaShoppingCart/>
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
