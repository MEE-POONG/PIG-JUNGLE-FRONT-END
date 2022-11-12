
import React from "react";
import Head from 'next/head';
import SigninUser from "@/components/Sign_In_User/Sign_In_User";

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
                <SigninUser/>
            </div>

        </>
    );
}