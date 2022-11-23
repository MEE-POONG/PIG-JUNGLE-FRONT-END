import {React, useState} from "react";
// components
import { Container, Card, Button, Image, Row, Col } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import ProductList from "container/Product/ProductList";



export default function ProductShow() {
    return(
        <>
            {/* -----start content----- */}
            <Container className="product-show">
                 {/* -------title----------- */}
                <div className='title-header mx-auto'>
                    <div className="active">สินค้าของเรา</div>
                    <div className="n-active">สินค้าของเรา</div>
                </div>

                <Row>
                    <div className="search">
                        <form>
                        <input className="search" type="text" placeholder="Search.." name="search" />
                        <button className="btnsearch" type="submit">
                            <i> <FaSearch/> </i></button>
                        </form>
                    </div>
                     {/* -----left row----- */}
                    <Col xs={6} md={3}>
                      <Card className='typelist'>
                        <h4>ประเภทสินค้า</h4> <hr />
                            <li> <a href="#"> อุปกรณ์ <i>(10)</i></a></li>
                            <li> <a href="#">เมล็ดกัญชา<i>(15)</i></a> </li>
                            <li> <a href="#">เสื้อยืด <i>(3)</i></a></li>
                      </Card>
                    </Col>
                    <Col xs={12} md={9} className='right-row'>
                     <ProductList/>
                    </Col>
                </Row>
            </Container>
        </>
         
    )
    
}