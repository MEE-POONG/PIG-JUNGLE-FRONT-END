import ProductShow from "container/Product/Productshow";
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
// import ProductList from "container/Product/ProductList";


const data = {
  products: [
    {
      id: "1",
      name: "Eleven rosé",
      price: "100",
      detail: "กัญชาชา",
      image: "images/product/marijuana_01.png"

    },
    {
      id: "2",
      name: "กัญ 2",
      price: "200",
      detail: "กัญชาชา",
      image: "images/product/marijuana_02.png"

    },
    {
      id: "3",
      name: "กัญ 3",
      price: "300",
      detail: "กัญชาชา",
      image: "images/product/marijuana_03.png"

    },
    {
      id: "4",
      name: "กัญ 4",
      price: "400",
      detail: "กัญชาชา",
      image: "images/product/marijuana_04.png"

    },
    {
      id: "5",
      name: "กัญ 5",
      price: "500",
      detail: "กัญชาชา",
      image: "images/product/marijuana_05.png"

    },
    {
      id: "6",
      name: "กัญ 6",
      price: "600",
      detail: "กัญชาชา",
      image: "images/product/marijuana_06.png"

    },
    {
      id: "7",
      name: "บ้องกัญชา 01 ",
      price: "611100",
      detail: "บ้องกัญชา 01",
      image: "images/product/marijuana_hookah_01.png"
    },
    {
      id: "8",
      name: "บ้องกัญชา 02 ",
      price: "622424",
      detail: "บ้องกัญชา 02",
      image: "images/product/marijuana_hookah_02.png"
    }
  ]
}

export default function ProductPage() {

  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };

  useEffect(() => {
    setCartItems(localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []);
  }, [])



  const { products } = data

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
        <ProductShow cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
        {/* <ProductList/> */}
      </div>
    </>
  )

}
ProductPage.layout = IndexLayout;