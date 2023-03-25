import React from 'react'
import './PartnersSection.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper'


const PartnersSection = () => {
  return (
    <div className="partners-section row" data-aos="zoom-in" data-aos-duration="2000">
        <h3 className='col-6 col-md-3'>Our Partners</h3>
        <div className="partner-logos col-6 col-md-9">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            707: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1036: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1305: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
            <SwiperSlide>
                <img src="http://easybook.kwst.net/images/partners/5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
                <img src="http://easybook.kwst.net/images/partners/4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
                <img src="http://easybook.kwst.net/images/partners/3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
                <img src="http://easybook.kwst.net/images/partners/2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
                <img src="http://easybook.kwst.net/images/partners/1.png" alt="" />
          </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default PartnersSection