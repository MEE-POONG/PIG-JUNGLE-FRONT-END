import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Button } from 'react-bootstrap';

export default function Topbar(props) {

    const { countCartItems } = props

  return (
    <>
     <section className="topNavbar d-flex">
        <div className="topNavbar-red flex-fill">
        </div>
        <div className="topNavbar-yellow flex-fill">
        </div>
        <div className="topNavbar-green flex-fill">
          <div className="d-flex justify-content-end">

          {countCartItems ? (<Button variant="light"><span>{countCartItems}</span> <FaShoppingCart/></Button>)
                          : (<Button variant="light"><span></span> <FaShoppingCart/></Button>)}
            
          </div>
        </div>
      </section>
    </>
  )
}
