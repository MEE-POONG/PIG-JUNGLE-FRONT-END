import React from 'react'
import { Image } from 'react-bootstrap';
import { FaExpand, FaHeart, FaPlus, FaShoppingCart, IconName } from "react-icons/fa";

export default function Product_Test() {
  return (
    <>
    <section className="section-products">
		<div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-md-8 col-lg-6">
                    <div className="header">
                        <h3>Featured Product</h3>
                        <h2>สินค้าขายดี</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-1" className="single-product">
                        <div className="part-1">
                            <Image src={'images/product2.jpg'} fluid/>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div className="part-2">
                            <h3 className="product-title">Here Product Title</h3>
                            <h4 className="product-old-price">$79.99</h4>
                            <h4 className="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-2" className="single-product">
                        <div className="part-1">
                            <Image src={'images/product2.jpg'} fluid/>
                            <span className="discount">15% off</span>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div className="part-2">
                            <h3 className="product-title">Here Product Title</h3>
                            <h4 className="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-3" className="single-product">
                        <div className="part-1">
                            <Image src={'images/product3.jpg'} fluid/>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div className="part-2">
                            <h3 className="product-title">Here Product Title</h3>
                            <h4 className="product-old-price">$79.99</h4>
                            <h4 className="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-4" className="single-product">
                        <div className="part-1">
                            <Image src={'images/product4.jpg'} fluid/>
                            <span className="new">new</span>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div className="part-2">
                            <h3 className="product-title">Here Product Title</h3>
                            <h4 className="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    </section>
    </>
  )
}
