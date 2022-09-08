import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6bt2jci', 'template_qnex8b9', form.current, '-St_kU3frs1ann--O')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>thokaldevyani123@gmail.com</h5>
            <a href="mailto:thokaldevyani123@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>devyani_thokal</h5>
            <a href="https://www.linkedin.com/in/devyani-thokal/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+919359619652</h5>
            <a href="https://wa.me/+919359619652" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact