import {React, useState} from "react";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'

export default function ProductShowDetails() {

    return (
        <div>
           
           <h1>Product Details</h1> 
            <Container>
                <img src={'images/product/marijuana_01.png'} className='img-detail' alt="imgProduct" />

                <div className="products-detail">
                    <h2>ชื่อสินค้า</h2>
                    <h5>รายละเอียด</h5>
                </div>
            </Container>

        
        </div>
    )
}