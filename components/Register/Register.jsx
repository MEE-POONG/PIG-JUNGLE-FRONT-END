import React from "react"
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Registerpage (){
    return(
    <>
<div className="box-Container-Rg">
<div className='Container-Rg'>
    <Image className='title-img-Lg-Rg' src={'images/logo02.png'} alt="logo-nav" width={'100px'}/>
    <h2 className='title-Lg-Rg'>Register</h2>
    <form>
    
    <input className='input-Lg-Rg' type="text" id="UserName" name="UserName" placeholder="UserName"/>
    
    <input className='input-Lg-Rg' type="text" id="Email" name="Email" placeholder="Email" />
    
    <input className='input-Lg-Rg' type="text" id="Password" name="Password" placeholder="Password"  />
    
    <input className='input-Lg-Rg' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="ConfirmPassword" />
    </form>
    <div className="box-btu-Lg-Rg">
    <button className="btu-Lg-Rg" type='sign-up'>SIGN UP</button>
    </div>
</div>
</div>
</>
)}
