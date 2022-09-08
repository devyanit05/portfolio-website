import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs' 

const Services = () => {
  return (
    <section id='services'>
      <h5>What more I learnt</h5>
      <h2>Co-curricular Activities</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Coordinator(VIT Socials)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icons' size="35"/>
              <p>Worked as a coordinator in Social Welfare and Development Committee. Arranged many events such as Blood Donation Camp, Swaccha Pune Abhiyan, Atmabodh, etc.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services