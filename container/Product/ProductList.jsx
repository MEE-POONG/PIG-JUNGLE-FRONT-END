import React from 'react'
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

export default function ProductList(props) {

    const { item, product, onAdd, onRemove } = props

    return (
        <>
            <Col xs={12} sm={6} md={6} lg={4}>
                <Card>
                    <Card.Header bsPrefix='card-header'>
                        <h3>{product.name}</h3>
                    </Card.Header>
                    <Card.Img src={product.image} className='img-product' alt="imgProduct" />
                    <Card.Body>
                        <div className="details">
                            <h5>{product.detail}</h5>
                            <h4><p> {product.price} บาท</p></h4>
                        </div>
                        {item ? (<ul className='p-0'>
                            <li>จำนวน</li>

                            <li className="bg" onClick={() => onAdd(item)}>
                                <FaPlus /></li>

                            <span className='p-1'>{item.qty}</span>

                            <li className="bg" onClick={() => onRemove(item)}>
                                <FaMinus /></li>

                            <li>กรัม</li>
                        </ul>
                        ) : ( <button className="foot" onClick={() => onAdd(product)}><FaShoppingCart className='icon' />เพิ่มเข้าตระกร้า</button>)}
                    </Card.Body>
                    <Card.Footer>
                        <span className="foot"><FaShoppingBag className='icon' />ซื้อเลย</span>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}
