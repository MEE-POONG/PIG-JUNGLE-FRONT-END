import React from "react";
// components
import { Container, Card, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';
import { BiSearchAlt2 } from "react-icons/bi";
import ProductList from "container/Product/ProductList";

export default function ProductShow() {
    return(
        <>
            {/* -----start content----- */}
            <Container className="product-show">
                <h1>สินค้าของเรา</h1>
                <Row>
                    <Col xs={6} md={3}>
                      <Card className='typelist'>
                        <h4>ประเภทสินค้า</h4> <hr />
                            <p>อุปกรณ์</p>
                            <p>เมล็ดกัญชา</p>
                            <p>เสื้อยืด</p>
                      </Card>
                    </Col>
                    <Col xs={12} md={9}>
                     <ProductList/>
                    </Col>
                </Row>
            </Container>
        </>
         
    )
    
}