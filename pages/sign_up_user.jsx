
import React from "react";
import Head from 'next/head';
import SignUpUser from "@/components/Sign_Up_User/Sign_Up_User";

export default function SignUpUserPages(){
    return(
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
                  <SignUpUser/>
        </div>
        </>
    );
}