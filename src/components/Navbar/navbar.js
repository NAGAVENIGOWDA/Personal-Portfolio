import React from 'react';
import logo from '../../react-portfolio-assets/assets/logo.png';
import "./navbar.css";
import {Link} from 'react-scroll';
import ContactImg from '../../react-portfolio-assets/assets/contact.png';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
        </div>

        <button className="desktopMenuBtn">
            <img src={ContactImg} alt='' className='desktopMenuImg'/> Contact Me
            </button>

      </nav>
    </div>
  )
}

export default Navbar
