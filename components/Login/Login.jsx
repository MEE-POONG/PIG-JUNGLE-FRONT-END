import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Loginpage (){
    return(
 <div className='box-Container-Lg'>  
    <div className='Container-Lg'>
    <Image className='title-img-Lg-Rg' src={'images/logo.png'} alt="logo-nav" width={'100px'}/>
    <h2 className='title-Lg-Rg'>Login</h2>
    <form>

    <input className='input-Lg-Rg' type="text" id="Email" name="Email" placeholder="Email" />
    
    <input className='input-Lg-Rg' type="text" id="Password" name="Password" placeholder="Password"/>

    </form>
    <div className='box-btu-Lg-Rg'>
    <button className='btu-Lg-Rg' type='Login'>Login</button>
    </div>
</div>
</div>
)

}
