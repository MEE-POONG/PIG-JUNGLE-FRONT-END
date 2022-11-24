import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function Topbar() {

  return (
    <>
      <section className="topNavbar d-flex position-relative">
        <div className="topNavbar-red flex-fill">
        </div>
        <div className="topNavbar-yellow flex-fill">
        </div>
        <div className="topNavbar-green flex-fill">
        </div>
        <div className="d-flex justify-content-end">
          <span className="position-absolute text-justify text-white me-4">
            <FaPhone className='me-1'/>
            420-420-4200
          </span>
        </div>
      </section>
    </>
  )
}
