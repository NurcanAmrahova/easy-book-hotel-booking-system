import React from 'react'
import './News.css'
import NewsProps from './NewsProps'
import Footer from '../../Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blogs from './Blogs.json'

// ICONS
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
const News = () => {

  AOS.init({

  })
  return (
    <div className="news">
      <div className="news-header">
        <div className="news-text" >
          <h1 data-aos="fade-down" data-aos-duration="1700"> Our Last News</h1>
          <p data-aos="fade-down" data-aos-duration="2000"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Laborum, expedita sequi quis quisquam iusto tempora <br />
            corrupti. Eligendi tempore esse maxime.</p>
        </div>
      </div>

      <div className="news-cards-section row" data-aos="zoom-in" data-aos-duration="2000">
        {/* map metodu numune
          {
       Blogs.map(info=>(
       <NewsProps Image={info['image-title']} Photo={info['author-photo']}/>
       ))
       } 
        */}
        
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
            <NewsProps Image='http://easybook.kwst.net/images/bg/12.jpg' Photo='http://easybook.kwst.net/images/avatar/2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/4.jpg' Photo='http://easybook.kwst.net/images/avatar/1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/3.jpg' Photo='http://easybook.kwst.net/images/avatar/4.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/1.jpg' Photo='http://easybook.kwst.net/images/avatar/3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/5.jpg' Photo='http://easybook.kwst.net/images/avatar/2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/10.jpg' Photo='http://easybook.kwst.net/images/avatar/1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <NewsProps Image='http://easybook.kwst.net/images/all/11.jpg' Photo='http://easybook.kwst.net/images/avatar/4.jpg' />
          </SwiperSlide>

        </Swiper>
       
      </div>

      <div className="find-us-section" data-aos="zoom-in" data-aos-duration="2000">
        <h1 data-aos="fade-down" data-aos-duration="2500">Follow us for getting news</h1>
        <div className="social-media-section row">
          <div className="instagram col-12 col-md-6 col-lg-3" data-aos="fade-right" data-aos-duration="2700">
            <a href="#">
              <AiFillInstagram className='instagram-icon' />
              <small>Instagram</small>
            </a>
          </div>
          <div className="facebook col-12 col-md-6 col-lg-3" data-aos="fade-right" data-aos-duration="2700">
            <a href="#"><AiFillFacebook className='facebook-icon' />
              <small>facebook</small>
            </a>
          </div>
          <div className="twitter col-12 col-md-6 col-lg-3" data-aos="fade-left" data-aos-duration="2700">
            <a href="#">
              <AiFillTwitterCircle className='twitter-icon' />
              <small> twitter</small>
            </a>
          </div>
          <div className="youtube col-12 col-md-6 col-lg-3" data-aos="fade-left" data-aos-duration="2700">
            <a href="#"> <AiFillYoutube className='youtube-icon' />
              <small>youtube</small>
            </a>
          </div>
        </div>
        <div className="mail-adress-section row" data-aos="fade-down" data-aos-duration="3000">
          <div className="mail col-12 col-md-6 col-lg-4 connection">
            <p>Mail:</p>
            <a href="#">yourmail@domain.com</a>
          </div>
          <div className="adress col-12 col-md-6 col-lg-4 connection">
          <p>Adress:</p>
            <a href="#">USA 27TH Brooklyn NY</a>
          </div>
          <div className="phone col-12 col-md-6 col-lg-4 connection">
          <p>Phone:</p>
            <a href="#">+7(111)123456789</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default News