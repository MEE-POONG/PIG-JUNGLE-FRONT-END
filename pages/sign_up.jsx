
import React from "react";
import Head from 'next/head';
import SignUpUser from "@/components/Sign_Up_User/Sign_Up_User";

export default function SignUpUserPages() {
    return (
        <>
            <Head>
                <title>PigJungle</title>
                <meta
                    name="description"
                    content="I2AROBOT 2"
                />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <div id='sign-user' name="sign-user" className='sign-user'>
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
            </div>
        </>
    );
}