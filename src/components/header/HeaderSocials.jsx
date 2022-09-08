import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/devyani-thokal/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/_devyani.thokal_/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/devyani.thokal.37" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/devyanit05" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials