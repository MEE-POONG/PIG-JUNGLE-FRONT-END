import {React, useState} from "react";
import { Image, Container, Row, Col, Card } from 'react-bootstrap'
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart,FaStar,FaShippingFast } from 'react-icons/fa'
import SlideProduct from "container/Product/SlideProduct"


export default function ProductShowDetails(props) {

    const { item, product, onAdd, onRemove } = props
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

            <div className="productslider">
            <SlideProduct/>
            </div>
        </div>
    )
}