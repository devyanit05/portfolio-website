import React from 'react'
import './achievements.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import required modules
import { Pagination } from "swiper";


const data = [
  {
    image: AVTR1,
    name: 'SIH',
    description: ' Loremnbvcdfgty huioknbvcrzsfxm ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum quibusdam deserunt doloribus, odio illum facilis natus voluptatibus, id est reprehenderit repellendus quod ratione officiis dicta. Laudantium sint voluptatem commodi.'
  },
  {
    image: AVTR2,
    name: 'SIH',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum quibusdam deserunt doloribus, odio illum facilis natus voluptatibus, id est reprehenderit repellendus quod ratione officiis dicta. Laudantium sint voluptatem commodi.'
  },
  {
    image: AVTR3,
    name: 'SIH',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum quibusdam deserunt doloribus, odio illum facilis natus voluptatibus, id est reprehenderit repellendus quod ratione officiis dicta. Laudantium sint voluptatem commodi.'
  },
  {
    image: AVTR4,
    name: 'SIH',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum quibusdam deserunt doloribus, odio illum facilis natus voluptatibus, id est reprehenderit repellendus quod ratione officiis dicta. Laudantium sint voluptatem commodi.'
  },
]

const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Certifications and Comeptitions</h5>
      <h2>Achievements</h2>

      <Swiper className="container achievements__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ image, name, description, index }) => {
            return (
              <SwiperSlide key={index} className='achievement'>
                <div className='certi__img' alt=''>
                  <img src={image} />
                </div>
                <h5 className='certi__name'>{name}</h5>
                <small className='certi__description'>{description}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Achievements