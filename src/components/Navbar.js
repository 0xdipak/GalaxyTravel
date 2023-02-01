import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [ham, setHam] = useState(false);

    const [color, setColor] = useState(false);

    const changeColor = () => {
      if(window.scrollY >= 100) {
        setColor(true);
      }
      else {
        setColor(false);
      }
    }

    window.addEventListener('scroll', changeColor);

    const handleHam = () => {
        setHam(!ham);
    }


  return (
    <div className={color ? 'header header-bg' : ' header'}>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={
        ham ? "nav-menu active" : "nav-menu"
      }>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHam}>
        {ham ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar