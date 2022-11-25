import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'


export default class Responsive extends Component {
  render() {
    
    return (
      <div className="productslider">
        <h2> สินค้าแนะนำ </h2>
        <div>
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
              <li className="bg" ><FaPlus /></li>
              <li>.....</li>
              <li className="bg"><FaMinus /></li>
              </ul>
              <button className='btn btn-success'>
                <FaShoppingCart className='icon' /> ดูรายละเอียด
              </button>
          </Card.Body>
          <Card.Footer>
            <span className="foot"><FaShoppingBag className='icon' /> ซื้อเลย</span>
          </Card.Footer> 
        </Card>
        </div>
       
      </div>
    );
  }
}

