import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function Login() {
    return (
        <div className='box-Container-Lg'>
            <div className='Container-Lg'>
                <h2 className='title-Lg-Rg'>Sign in</h2>
                <form>

                    <input className='input-Lg-Rg' type="text" id="Email" name="Email" placeholder="Email" />

                    <input className='input-Lg-Rg' type="text" id="Password" name="Password" placeholder="Password" />


                </form>
                <div className='box-btu-Lg-Rg'>
                    <a className='btu-Lg-Rg' type='Login'>Sign in</a>

                </div>
                <div className='box-text'>
                    <a className='text-Lg-Rg' href="/register"> Sign up</a> <a className='text-Lg-Rg' href="">Forgot Password?</a>
                </div>
            </div>
        </div>
    )

}
