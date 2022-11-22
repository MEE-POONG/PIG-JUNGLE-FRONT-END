import ProductShow from "container/Product/Productshow";
import React from "react";
import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";


export default function productTest() {
  return (
    <>
        <Head>
          <title>PigJungle</title>
          <meta
            name="description"
            content="Product"
          />
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <div id='product-page' name="product-page" className='product-page'>
          <ProductShow/>
          {/* <ProductList/> */}
        </div>
      </>
  )
}
productTest.layout = IndexLayout