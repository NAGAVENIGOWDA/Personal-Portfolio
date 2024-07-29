import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../react-portfolio-assets/assets/image2.jpg'
import  btnImg from '../../react-portfolio-assets/assets/hireme.png'


const Intro = () => {
  return (
   <section id="intro">
    <img src={bg} alt="Profile" className='bg'/>
    <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Nagaveni</span><br/>Web Developer</span>
      <p className="introPara">I am a skilled web developer with experience in creating <br />visually appealing and user friendly websites.</p>
       <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
    </div>
    
   </section>
  );
}

export default Intro
