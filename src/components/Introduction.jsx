import React, { useState } from 'react'
import './Introduction.css'
import {BiSearchAlt} from 'react-icons/bi'
import Typed from 'react-typed';
import {AiFillStar} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Introduction = () => {
  AOS.init({

  })
  return (

    <>
    
    <div className="intro">
    <div className="overlay-image"></div>
    <div className="intro-container">
      <div className="star-icon-container">
      <AiFillStar className='little-star' data-aos="flip-right" data-aos-duration="1500"/>
      <AiFillStar className='big-star' data-aos="flip-right" data-aos-duration="1500"/>
      <AiFillStar className='little-star' data-aos="flip-right" data-aos-duration="1500"/>
      </div>
    <Typed
    className='easybook' 
                strings={[
                    'EasyBook Hotel Booking System']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    >
                </Typed>
        
        <p data-aos="flip-right" data-aos-duration="1500">Let's start exploring the world <br/> together with EasyBook</p>
        <form action="" className='search-bar' data-aos="fade-up" data-aos-duration="2000">
          <input type="text"  placeholder='Search Anything    . . .'/>
          <button type='submit'><BiSearchAlt className='search-icon'/></button>
        </form>
        </div>
    </div>
    
    
</>
  
  )
}

export default Introduction