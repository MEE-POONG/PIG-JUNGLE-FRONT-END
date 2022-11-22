import React, { useState } from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

const data = [
    {
        id: 1,
        name: "product 1",
        price: "100",
    },
    {
        id: 2,
        name: "product 2",
        price: "300",
    },
    {
        id: 3,
        name: "product 3",
        price: "1000",
    },
    {
        id: 4,
        name: "product 4",
        price: "2000",
    },
    {
        id: 5,
        name: "product 5",
        price: "3000",
    },
]

export default function ProductList() {

    const [product, setProduct] = useState(data);
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(data.price)

    const countIncreat = (id) => {
        if (count >= 1) {
            setCount((count) => count + 1)
            setPrice((price) => price + data.price)
        }
    }

    const countDecreat = (id) => {
        if (count > 1) {
            setCount((count) => count - 1)
            setPrice((price) => price - data.price)
        }
    }

    return (
        <>
            <Container className='product-list'>
                <Row>
                    {product.map((item) => {
                        const { id, name, price } = item
                        return (
                            <Col lg={3}>
                                <Card key={id}>
                                    <Card.Header bsPrefix='card-header'>
                                        <h2>{name}</h2>
                                    </Card.Header>
                                    <Card.Img src={'images/product/marijuana_01.png'} className='img-product' alt="imgProduct" />
                                    <Card.Body>
                                        <div className="details">
                                            <h5>รายละเอียดสินค้า</h5>
                                            <h4><p>ราคา {price.toLocaleString("en-US")} บาท</p></h4>
                                        </div>
                                        <ul className='p-0'>
                                            <li>จำนวน</li>

                                            <li className="bg"
                                                onClick={() => countIncreat(id)}>
                                                <FaPlus /></li>

                                            <li>{count}</li>

                                            <li className="bg"
                                                onClick={() => countDecreat(id)}>
                                                <FaMinus /></li>

                                            <li>กรัม</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <span className="foot"><FaShoppingBag className='icon me-1' />Buy Now</span>
                                        <span className="foot"><FaShoppingCart className='icon me-1' />Add TO Cart</span>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </>
    )
}
