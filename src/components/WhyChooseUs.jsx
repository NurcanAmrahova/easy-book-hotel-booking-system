import React, { useRef, useState }  from 'react'
import './WhyChooseUs.css'
import {AiFillStar} from 'react-icons/ai'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import QualityCards from './Props/QualityCards';
import {RiCustomerService2Fill} from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhyChooseUs = () => {
  AOS.init({
    
  })
  return (
    <>
    <div className="WhyChooseUs-section" data-aos="zoom-in" data-aos-duration="1500">
    <AiFillStar className='little-star'/>
    <AiFillStar className='big-star'/>
    <AiFillStar className='little-star'/>
    
      <h3>Why Choose Us</h3> 
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> 
      Numquam quam iste sit non praesentium nulla <br /> ipsum voluptates perspiciatis, officiis nam.</p>

     <div className="quality-section row">
      <div className="col-12 col-md-6 col-lg-4" data-aos='flip-left' data-aos-delay='2000'><QualityCards  Image="https://cdn-icons-png.flaticon.com/512/950/950299.png" Name="Best Service Guarantee" Info="Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis."/></div>
      <div className="col-12 col-md-6 col-lg-4" data-aos='flip-left' data-aos-delay='2400'><QualityCards  Image="https://static.vecteezy.com/system/resources/thumbnails/002/205/948/small/gift-box-icon-free-vector.jpg" Name="Exclusive Gifts" Info="Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis."/></div>
      <div className="last-child col-12 col-md-6 col-lg-4" data-aos='flip-left'data-aos-delay='2800'><QualityCards  Image="https://cdn-icons-png.flaticon.com/512/4341/4341764.png" Name="Get more from your card" Info="Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis."/></div>
    </div>

    </div>

  
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default WhyChooseUs