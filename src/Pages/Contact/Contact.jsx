import React from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-description">
        <h1>Contact us</h1>
        <p>Fill out the form to contact us</p>
      </div>

      <div className="contact-main">

        <div className="contact-info">
          <h1> Info</h1>
          <div><FaPhoneAlt /><p>01234567890</p></div>
          <div><IoIosMail /><p>hello@gmail.com</p></div>
          <div><FaLocationDot /><p>Massachusetts Ave NW, Washington, DC 20036</p></div>
        </div>

        <div className="contact-form">
          <div className="input-name">
            <input type="text" className='input-firstName' placeholder='First name' />
            <input type="text" className='input-lastName' placeholder='Second name'/>
          </div>
          <input type="text" className="input-subject" placeholder='Subject'/>
          <textarea name="description" className="input-description" placeholder='Description'></textarea>
          <button className="input-btn">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact