import React from 'react'

export default function Contactpage() {
    return (
            <div className='Container'>
  
                <form action="/send-data-here" method="post">
                    <label for="first">First name:</label>
                    <input type="text" id="first" name="first" />
                    <label for="last">Last name:</label>
                    <input type="text" id="last" name="last" />
                    <button type="submit">Submit</button>
                </form>

 
            </div>

        // start contact








    )
}


