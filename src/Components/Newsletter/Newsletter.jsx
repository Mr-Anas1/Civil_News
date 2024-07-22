import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter-left">
            <p className="heading">NEWSLETTER</p>
            <h1>Subscribe to our website newsletter to receive news and updates.</h1>
            <p className='newsletter-left-description'>Get special offers directly to your email every week!</p>
        </div>

        <div className="newsletter-right">
            <input type="email" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter