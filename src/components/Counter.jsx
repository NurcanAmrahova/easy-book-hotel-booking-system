import React,{useState}from 'react'
import './Counter.css'
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ICONS
import {BsFillPeopleFill} from 'react-icons/bs'
import {SlLike} from 'react-icons/sl'
import {FaAward} from 'react-icons/fa'
import {BsListCheck} from 'react-icons/bs'

const Counter = () => {
  AOS.init({
    duration: 800,
  easing: 'ease-in-out',
  delay: 100,
  })


  return (
    <div className="counter-container row" >
        <div className="counter col-12 col-md-6 col-lg-3 " data-aos="zoom-out-right" data-aos-duration="2000">
          <div className="count-text">
        <CountUp className='numbers'
        start={0}
        end={254}
        duration={4}
        decimals={2}
         />
        <p>Happy Visiter Everyday</p>
        </div>
        <div className="icon"><BsFillPeopleFill className='counter-icon'/></div>
        </div>

        <div className="counter col-12 col-md-6 col-lg-3" data-aos="zoom-out-right" data-aos-duration="2000">
       <div className="count-text">
        <CountUp className='numbers'
        start={0}
        end={12168}
        duration={4}
        decimals={2}
         />
        <p>Happy Customers Every Year</p>
         </div>
        <div className="icon"><SlLike className='counter-icon'/></div>
        </div>

        <div className="counter col-12 col-md-6 col-lg-3" data-aos="zoom-out-left" data-aos-duration="2000">
        <div className="count-text">
        <CountUp className='numbers'
        start={0}
        end={172}
        duration={4}
        decimals={2}
         />
        <p>Won Awards Every Year</p>
        </div>
        <div className="icon"><FaAward className='counter-icon'/></div>
        </div>

        <div className="counter col-12 col-md-6 col-lg-3" data-aos="zoom-out-left" data-aos-duration="700">
        <div className="count-text">
        <CountUp className='numbers'
        start={0}
        end={732}
        duration={4}
        decimals={2}
         />
        <p>New Listings Every Week</p>
        </div>
        <div className="icon"><BsListCheck className='counter-icon'/></div>
        </div>
    </div>
  )
}

export default Counter