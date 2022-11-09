import IndexNavbar from '@/components/Navbars/IndexNavbar'
import React from 'react'
// import '../components/Product/StyleProduct.module.css'

export default function Productpage() {
    return(
        
        <div  className='container'>
             <head className="bgbaner">
                <h1 >Product</h1>
                <p>HOME / ABOUT</p>
        </head> 

        <h1> รายการสินค้า </h1>
        <br />
            <div className='row'>
                <div className="col-sm">
                One of three columns
                <div className="card">
                    <image className="card.img" src={'images/logo.png'}  alt="image 1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                One of three columns
                </div>
                <div className="col-sm">
                One of three columns
                </div>
            </div>
            
        </div>
        
    )
    
}
 