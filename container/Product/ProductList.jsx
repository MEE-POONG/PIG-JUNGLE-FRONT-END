import React, { useState } from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

export default function ProductList() {

    let priceDefult = 150
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(priceDefult)

    const countIncreat = () => {
        if (count >= 1) {
            setCount((count) => count + 1)
            setPrice((price) => price + priceDefult)
        }
    }

    const countDecreat = () => {
        if (count > 1) {
            setCount((count) => count - 1)
            setPrice((price) => price - priceDefult)
        }
    }

    return (
        <>
            <Container className='product-list'>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Header bsPrefix='card-header'>
                                <h3>Eleven rosé</h3>
                            </Card.Header>
                            <Card.Img src={'images/product/marijuana_01.png'} className='img-product' alt="imgProduct" />
                            <Card.Body>
                                <div className="details">
                                    <h5>- indica
                                        - THC 17%
                                        - effects ง่วงนอน หิว ผ่อนคลาย
                                        - กลิ่นรสชาติ กุหลาบ</h5>
                                    <h4><p>ราคา {price.toLocaleString("en-US")} บาท</p></h4>
                                </div>
                                <ul className='p-0'>
                                    <li>จำนวน</li>

                                    <li className="bg"
                                        onClick={() => countIncreat()}>
                                        <FaPlus /></li>

                                    {count}

                                    <li className="bg"
                                        onClick={() => countDecreat()}>
                                        <FaMinus /></li>

                                    <li>กรัม</li>
                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <span className="foot"><FaShoppingBag className='icon' />Buy Now</span>
                                <span className="foot"><FaShoppingCart className='icon' />Add TO Cart</span>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
