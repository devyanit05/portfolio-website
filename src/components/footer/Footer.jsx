import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Portfolio Website</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#achievements'>Achievements</a></li>
        <li><a href='#portfolio'>Prtfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/devyani-thokal/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/_devyani.thokal_/" target="_blank"><BsInstagram /></a>
        <a href="https://www.facebook.com/devyani.thokal.37" target="_blank"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Devyani's Portfolio.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer