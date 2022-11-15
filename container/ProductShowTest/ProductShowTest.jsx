import React from 'react'
import { Image } from 'react-bootstrap'
import { FaMinus, FaPlus, FaSearch, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa'

export default function ProductShowTest() {
  return (
    <>
    <div className='product-test'>
        <div className="product-card">
            <div className="left">
                {/* <Image src={'images/product/marijuana_04.png'} className='img-product' alt="imgProduct"/> */}
            </div>
            <div className="right">
                <div className="product-info">
                    <div className="product-name">
                        <h1>Airmax</h1>
                        <FaSearch className='icon'/>
                        <FaUser className='icon'/>
                        <FaShoppingCart className='icon'/>
                    </div>
                    <div className="details">
                        <h3>Winter Collection</h3>
                        <h2>Men Black Sneakers</h2>
                        <h4><span className="fa fa-dollar"></span>150</h4>
                    </div>
                    <ul>
                        <li>จำนวน</li>
                        <li className="bg"><FaPlus/></li>
                        <li className="bg"><FaMinus/></li>
                    </ul>
                    <span className="foot"><FaShoppingBag className='icon'/>Buy Now</span>
                    <span className="foot"><FaShoppingCart className='icon'/>Add TO Cart</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
