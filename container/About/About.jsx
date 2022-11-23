import React from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function About() {
    return (
        <>

            <div className='title-header mx-auto'>
                <div className="active">เกี่ยวกับเรา</div>
                <div className="n-active">เกี่ยวกับเรา</div>
            </div>
            <Container>
                <Row>
                    <Col md={12} lg={6} sm={6}>
                        <div className="products">
                            <h3>
                                ความรู้เกี่ยวกับกัญชา
                            </h3>
                            <p>—รอบรู้เรื่องกัญชา—</p>
                        </div>
                        <p className="work">กัญชา เป็นพืชสกุล Cannabis อยู่ในวงศ์ Cannabaceae มี 3 สายพันธุ์ที่พบบ่อย ได้แก่ สายพันธุ์ซาติวา (Cannabis sativa) สายพันธุ์อินดิกา (Cannabis indica) และสายพันธุ์รูเดอราลิส (Cannabis ruderalis) ส่วนคำว่ามาลีฮวนน่า (Marijuana) เป็นคำแสลงที่ใช้ส่วนดอกของต้นกัญชานำมาสูบ
                        </p>


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


            <div className='letter'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <p> ทางเรามีสินค้ามากมายให้คุณเลือก </p>
                            <h3 className='text-letter '> คลิกที่ shop now... </h3>
                        </div>
                        <br />
                        <br />
                        {/*--------------- map -----------------*/}
                        <div className="col-md-6">
                            <div className='d-flex'>
                                <input href="/product" type="submit" value="SHOP NOW" className="input-submit" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}