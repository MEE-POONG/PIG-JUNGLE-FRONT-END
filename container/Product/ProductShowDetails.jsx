import {React, useState} from "react";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart,FaStar,FaShippingFast } from 'react-icons/fa'

export default function ProductShowDetails(props) {
    const { cartItems, products, onAdd, onRemove } = props

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
                            <span> <FaStar className="sart-icon"/> </span>
                            <span> <FaStar className="sart-icon"/> </span>
                            <span> <FaStar className="sart-icon"/> </span>
                            <span> <FaStar className="sart-icon"/> </span>
                            <span> <FaStar className="sart-icon"/> </span>
                        </div>
                        <div className="shipping-rates">
                            <span> <FaShippingFast className="shipping-icon"/>Standard Delivery</span>
                        </div>
                        <li>จำนวน </li>
                        
                        <span className="foot"><FaShoppingBag className='icon' />Buy Now</span>
                        <span className="foot"><FaShoppingCart className='icon' />Add TO Cart</span>
                    </div>
                </div>
            </div>
        {/* Start add-on */}
            <div className="add-on">
                <h2 className="title-addon">แนะนำสำหรับคุณ</h2> 
            </div>
       

        </div>
    )
}