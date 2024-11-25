import React from 'react'
import './Navbar.css'
import { IoMdMicrophone } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <IoMdMicrophone className='logo-img'/>
            <h1 className='logo-text'>CIVIL NEWS</h1>
        </div>

        <div className="navbar-links">
            <Link to={"/listen"}><li>Home</li><hr /></Link>
            <Link to={"/podcast"}><li>Podcast</li><hr /></Link>
            <Link to={"/about"}><li>About</li><hr /></Link>
            <Link to={"/contact"}><li>Contact</li><hr /></Link>
        </div>

        <div className="navbar-search">
            <IoSearch className='search-icon icon'/>
        </div>
    </div>
  )
}

export default Navbar