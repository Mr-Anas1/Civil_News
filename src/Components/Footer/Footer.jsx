import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { IoMdMicrophone } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <IoMdMicrophone className='footer-logo-img'/>
            <h1 className='logo-text'>LISTEN</h1>
        </div>

        <div className="footer-links">
            <Link to={"/"}><li>Home</li><hr /></Link>
            <Link to={"/podcast"}><li>Podcast</li><hr /></Link>
            <Link to={"/about"}><li>About</li><hr /></Link>
            <Link to={"/contact"}><li>Contact</li><hr /></Link>
        </div>

        <div className="footer-social">
            <FaFacebook />
            <FaSquareXTwitter />
            <BsFillThreadsFill />
        </div>
    </div>
  )
}

export default Footer