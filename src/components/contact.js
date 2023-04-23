import React from 'react'
import '../styles/contact.css'
export default function contact() {
  return (
    <div>
    <h1 className="contact_head">Contact Us</h1>
    <h2 className="contact_head">Feel Free to contact us regarding any feedback</h2>
    <form id="form">
    <input  className='userid' type="text" placeholder='Username' />
    <br/>
    <textarea  className='userid'  placeholder='comment' />
    <br/>
    <input  type="submit" value="Submit"/>
    </form>
    </div>
    
  )
}
