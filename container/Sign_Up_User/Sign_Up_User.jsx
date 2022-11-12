import React from "react"
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function SignUpUser() {
    return (
        <>
            <div className="box-Container-Su">
                <div className='Container-Su'>
                    <h2 className='title-Si-Su'>Sign up</h2>
                    <form>

                        <input className='input-Si-Su' type="text" id="UserName" name="UserName" placeholder="UserName" />

                        <input className='input-Si-Su' type="text" id="Email" name="Email" placeholder="Email" />

                        <input className='input-Si-Su' type="text" id="Password" name="Password" placeholder="Password" />

                        <input className='input-Si-Su' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="ConfirmPassword" />
                    </form>
                    <div className="box-btu-Si-Su">
                        <a className="btu-Si-Su-Ad" type='sign-up' href="/address_user">SIGN UP</a>
                    </div>
                    <div className='box-text'>
                        <a className='text-Si-Su' href="/sign_in_user">Sign in</a>
                    </div>
                </div>
            </div>
        </>
    )
}

