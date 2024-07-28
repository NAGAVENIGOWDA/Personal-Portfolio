import React, { useState } from 'react';
import logo from '../../react-portfolio-assets/assets/logo.png';
import "./navbar.css";
import {Link} from 'react-scroll';
import ContactImg from '../../react-portfolio-assets/assets/contact.png';
import Menu from '../../react-portfolio-assets/assets/menu.png'
const Navbar = () => {
  
  const [showMenu,setShowMenu]=useState(false);

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-45} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education </Link>
            <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-45} duration={500} className="desktopMenuListItem">Awards </Link>
        </div>

        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});

        }}>
            <img src={ContactImg} alt='' className='desktopMenuImg'/> Contact Me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="NavMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-45} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Education </Link>
            <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-45} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Awards </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-45} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact </Link>
        </div>
           
      </nav>
    </div>
  )
}

export default Navbar
