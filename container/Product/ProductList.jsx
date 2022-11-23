import React, { useState } from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

export default function ProductList() {

    const data = {
        products: [
            {
                id: "1",
                name: "Eleven rosé",
                price: "100",
                details: "กัญชาชา",
                image: "images/product/marijuana_01.png"

            },
            {
                id: "2",
                name: "กัญ 2",
                price: "200",
                details: "กัญชาชา",
                image: "images/product/marijuana_02.png"

            },
            {
                id: "3",
                name: "กัญ 3",
                price: "300",
                details: "กัญชาชา",
                image: "images/product/marijuana_03.png"

            },
            {
                id: "4",
                name: "กัญ 4",
                price: "400",
                details: "กัญชาชา",
                image: "images/product/marijuana_04.png"

            },
            {
                id: "5",
                name: "กัญ 5",
                price: "500",
                details: "กัญชาชา",
                image: "images/product/marijuana_05.png"

            }, 
            {
                id: "6",
                name: "กัญ 6",
                price: "600",
                details: "กัญชาชา",
                image: "images/product/marijuana_06.png"

            },
            {
                id: "7",
                name: "บ้องกัญชา 01 ",
                price: "611100",
                details: "บ้องกัญชา 01",
                image: "images/product/marijuana_hookah_01.png"
            },
            {
                id: "7",
                name: "บ้องกัญชา 02 ",
                price: "622424",
                details: "บ้องกัญชา 02",
                image: "images/product/marijuana_hookah_02.png"
            }
        ]
    }

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
                    {data.products.map((e) => (
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Header bsPrefix='card-header'>
                                    <h3>{e.name}</h3>
                                </Card.Header>
                                <Card.Img src={e.image} className='img-product' alt="imgProduct" />
                                <Card.Body>
                                    <div className="details">
                                        <h5>{e.details}</h5>
                                        <h4><p> {e.price} บาท</p></h4>
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

                    ))}

                </Row>
            </Container>
        </>
    )
}
