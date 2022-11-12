import React from 'react'
import { Image } from 'react-bootstrap';
import { FaExpand, FaHeart, FaPlus, FaShoppingCart, IconName } from "react-icons/fa";

export default function Product_Test() {
  return (
    <>
    <section class="section-products">
		<div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8 col-lg-6">
                    <div class="header">
                        <h3>Featured Product</h3>
                        <h2>สินค้าขายดี</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-1" class="single-product">
                        <div class="part-1">
                            <Image src={'images/product2.jpg'} fluid/>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div class="part-2">
                            <h3 class="product-title">Here Product Title</h3>
                            <h4 class="product-old-price">$79.99</h4>
                            <h4 class="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-2" class="single-product">
                        <div class="part-1">
                            <Image src={'images/product2.jpg'} fluid/>
                            <span class="discount">15% off</span>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div class="part-2">
                            <h3 class="product-title">Here Product Title</h3>
                            <h4 class="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-3" class="single-product">
                        <div class="part-1">
                            <Image src={'images/product3.jpg'} fluid/>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div class="part-2">
                            <h3 class="product-title">Here Product Title</h3>
                            <h4 class="product-old-price">$79.99</h4>
                            <h4 class="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div id="product-4" class="single-product">
                        <div class="part-1">
                            <Image src={'images/product4.jpg'} fluid/>
                            <span class="new">new</span>
                            <ul>
                                <li><a href="#"><FaShoppingCart/></a></li>
                                <li><a href="#"><FaHeart/></a></li>
                                <li><a href="#"><FaPlus/></a></li>
                                <li><a href="#"><FaExpand/></a></li>
                            </ul>
                        </div>
                        <div class="part-2">
                            <h3 class="product-title">Here Product Title</h3>
                            <h4 class="product-price">$49.99</h4>
                        </div>
                    </div>
                </div>
            </div>
		</div>
    </section>
    </>
  )
}
