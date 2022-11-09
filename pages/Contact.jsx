import React from 'react'

export default function Contactpage() {
    return (

        <div className='Container'>
            <br />  <br />  <br />
            <div class="col order-1">
                One of three columns
            </div>
            <br />  <br />  <br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        One of three columns

                        <div class="mb-3">
                          <div className='Form'>
                            <input className='Form' id="name" type="text" placeholder="Yourname" />
                        </div>
                        <div class="mb-3 ">
                         
                            <input className='Form' id="emailAddress" type="email" placeholder="Email Address" />
                        </div>

                        <div class="mb-3 ">
                          
                            <textarea className='Form' id="message" type="text" placeholder="Your Message" style={{ width: '200px', height: '240px' }}></textarea>
                        </div>

                        <div class="mb-3 ">
                            <button className='btn' type="submit">SUBMIT FROM</button>
                        </div>

                        </div>
                        </div>
                   
                    <div class="col order-1">
                        One of three columns
                    </div>

                </div>
            </div>
        </div>



        // start contact








    )
}


