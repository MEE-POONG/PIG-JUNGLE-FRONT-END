<<<<<<< HEAD

=======
>>>>>>> 5e37d3a2b73e0a9414c5627559a8b05ae28ad365
import IndexNavbar from '@/components/Navbars/IndexNavbar'
import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Productpage() {
    return(
         
        <div className="divbg"> 


            <div className="bgbaner">
                <h1 className="title">Product</h1>
                <a className="bgbaner.a"  href="#">HOME</a>
                <span >/ PRODUCT </span>


            </div>
        
        {/* start content */}
        <div className='content'>
        <h1 className="top"> Product </h1>
        <hr />
        <br />
            <div className='row'>
                <div className="col">
                {/* 1 */}
                    <div className="card">
                        <Image className="img" src={'images/product.jpg'} alt="product1" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า1</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 2 */}
                    <div className="card">
                    <Image className="img" src={'images/product2.jpg'} alt="product2" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า2</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 3 */}
                    <div className="card">
                    <Image className="img" src={'images/product3.jpg'} alt="product3" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า3</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 4 */}
                    <div className="card">
                    <Image className="img" src={'images/product3.jpg'} alt="product3" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า4</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

            <div className="row"> 
                <div className="col">
                {/* 5 */}
                    <div className="card">
                        <Image className="img" src={'images/product5.jpg'} alt="product5" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า5</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 6 */}
                    <div className="card">
                    <Image className="img" src={'images/product6.jpg'} alt="product6" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า6</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 7 */}
                    <div className="card">
                    <Image className="img" src={'images/product7.jpg'} alt="product7" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า7</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>
            
                <div className="col">
                {/* 8 */}
                    <div className="card">
                    <Image className="img" src={'images/product8.jpg'} alt="product8" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า8</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>
            </div>

            <div className="row">  
                <div className="col">
                {/* 9 */}
                    <div className="card">
                        <Image className="img" src={'images/product9.jpg'} alt="product9" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า9</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 10 */}
                    <div className="card">
                    <Image className="img" src={'images/product10.jpg'} alt="product10" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า10</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 11 */}
                    <div className="card">
                    <Image className="img" src={'images/product11.jpg'} alt="product11" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า11</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn">ใส่ตะกร้า</a>
                        </div>
                        </div>
                </div>

                <div className="col">
                {/* 12
                    <div className="card">
                    <Image className="img" src={'images/product12.jpg'} alt="product12" width={'100px'}/>
                        <div className="card-body">
                            <h5 className="card-title">สินค้า12</h5>
                            <p className="card-text">อธิบายสินค้า.</p>
                            <a href="#" className="btn btn">ใส่ตะกร้า</a>
                        </div>
                        </div> */}
                    </div>
                </div>
            </div>  
            
            </div>
      {/* end  */}
                    <footer className="foot">
                    <a>Pic Jungle</a>
                    </footer>  
        </div>

        
    )
    
}
 



