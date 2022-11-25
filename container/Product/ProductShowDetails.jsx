import {React, useState} from "react";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart,FaStar,FaShippingFast } from 'react-icons/fa'

export default function ProductShowDetails() {

    // const { item, product, onAdd, onRemove } = props
    return (
        <div className="products-show-detail"> 
            {/* Box detail */}
            <div className="container">
                <div className="box">
                    <figure><img src={'images/product/marijuana_01.png'} className='img-detail' alt="imgProduct" /></figure>
                    <div className="product-detail">
                        <h2>Name</h2>
                        <h5>รายละเอียดสินค้า</h5>
                        <h3>ราคา ... บาท</h3>
                        <div className="stars-rating">
                            <span>Rating</span>
                            <span> <FaStar className="star-icon"/> </span>
                            <span> <FaStar className="star-icon"/> </span>
                            <span> <FaStar className="star-icon"/> </span>
                            <span> <FaStar className="star-icon"/> </span>
                            <span> <FaStar className="s-icon"/> </span>
                        </div>
                        <div className="shipping-rates">
                            <span> <FaShippingFast className="shipping-icon"/>Standard Delivery</span>
                        </div>
                        <ul className='p-count'>
                                <li>จำนวน</li>
                                <span><li className="bg" ><FaPlus /></li> </span>
                                <span><li>.....</li> </span>
                                <span><li className="bg"><FaMinus /></li></span>
                            </ul> <br />
                        <span className="foot"><FaShoppingBag className='icon-buy' />Buy Now</span>
                        <span className="foot"><FaShoppingCart className='icon-cart' />Add TO Cart</span>
                    </div>
                </div>
            </div>
            <Container>
                <div className="add-on">
                    <h2>สินค้าแนะนำ</h2>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Header bsPrefix='card-header'>
                                    <h3>ชื่อ</h3>
                                </Card.Header>
                                <Card.Img src={'images/product/marijuana_01.png'} className='img-product' alt="imgProduct" />
                                <Card.Body>
                                    <div className="details">
                                        <h5>detail</h5>
                                        <h4><p> price บาท</p></h4>
                                    </div>
                                    <ul className='p-0'>
                                        <li>จำนวน</li>

                                        <li className="bg" >
                                            <FaPlus /></li>

                                        <li>.....</li>

                                        <li className="bg">
                                            <FaMinus /></li>

                                        <li>กรัม</li>
                                    </ul>
                                        <ul className='p-0'>
                                            <li>
                                                <button className='btn btn-success'>
                                                    <FaShoppingCart className='icon' /> เพิ่มเข้าตระกร้า
                                                </button>
                                            </li>
                                        </ul>
                                </Card.Body>
                                <Card.Footer>
                                    <span className="foot"><FaShoppingBag className='icon' /> ซื้อเลย</span>
                                </Card.Footer> 
                            </Card>
                        </Col>

                        
                    </Row>
                </div>
            </Container>   
        
        </div>
    )
}