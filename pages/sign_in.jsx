
import React from "react";
import Head from 'next/head';
import SigninUser from "container/Sign_In_User/Sign_In_User";

export default function AdderssUserPage() {
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
            </div>

        </>
    );
}