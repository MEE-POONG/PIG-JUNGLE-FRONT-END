import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function SigninUser() {
    return (
        <div className='box-Container-Si'>
            <div className='Container-Si'>
                <h2 className='title-Si-Su'>Sign in</h2>
                <form>

                    <input className='input-Si-Su' type="text" id="Email" name="Email" placeholder="Email" />

                    <input className='input-Si-Su' type="text" id="Password" name="Password" placeholder="Password" />


                </form>
                <div className='box-btu-Si-Su'>
                    <a className='btu-Si-Su-Ad' type='SignIn'>Sign in</a>

                </div>
                <div className='box-text'>
                    <a className='text-Si-Su' href="/sign_up_user"> Sign up</a> <a className='text-Si-Su' href="">Forgot Password?</a>
                </div>
            </div>
        </div>
    )

}
