import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

import LinkedInIcon from '../../react-portfolio-assets/assets/linkedin.jpg';
import GitHubIcon from '../../react-portfolio-assets/assets/git.jpg';
import InstagramIcon from '../../react-portfolio-assets/assets/instagram.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t1tc32b', 'template_amlnvyl', e.target, 'tmW7tfiVCsoaNN_zF')
  .then((result) => {
    console.log(result.text);
    alert('Message sent successfully!');
  })
  .catch((error) => {
    console.log(error.text);
    alert('Failed to send message. Please try again.');
  });


    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className='contactForm' onSubmit={sendEmail}>
        <input 
          type="text" 
          className='name' 
          name='name' 
          placeholder='Your Name' 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          className='email' 
          name='email' 
          placeholder='Your Email' 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message" 
          rows='5' 
          placeholder='Your Message' 
          className='msg' 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="submitBtn" value='send' type='submit'>Submit</button>
        <div className="links">
          <a href="https://www.linkedin.com/in/nagaveni-gowda-21a831233/" target='_blank' rel='noopener noreferrer'><img src={LinkedInIcon} alt="LinkedIn" className="link" /></a>
          <a href="https://github.com/NAGAVENIGOWDA" target='_blank' rel='noopener noreferrer'><img src={GitHubIcon} alt="GitHub" className="link" /></a>
          <a href="https://www.instagram.com/nagaveni___gowda/" target='_blank' rel='noopener noreferrer'><img src={InstagramIcon} alt="Instagram" className="link" /></a>
        </div>
      </form>
      
    </section>
  );
}

export default Contact;
