//import React from 'react'
import'./contact.scss';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useState } from 'react';
export default function Contact() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true);
  }
  const [message,setMessage]=useState(false);
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='hand'/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your review!</span>}
        </form>
      </div>
    </div>
  )
}

