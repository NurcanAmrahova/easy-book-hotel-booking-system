import React, { useEffect } from 'react'
import './PopularDestinations.css'
import { AiFillStar } from 'react-icons/ai'
import Cards from '../components/Props/Cards.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularDestinations = () => {
  useEffect(()=>{
  AOS.init({
    duration: 800,
  easing: 'ease-in-out',
  delay: 100,
  })

  },[])
  return (
    <div className="popular-destination-sector" data-aos="zoom-in" data-aos-duration="1700">
      <div className="star-icon-container">
      <AiFillStar className='little-star' data-aos="flip-right" data-aos-duration="1500"/>
      <AiFillStar className='big-star' data-aos="flip-right" data-aos-duration="1500"/>
      <AiFillStar className='little-star' data-aos="flip-right" data-aos-duration="1500"/>
      </div>

      <h2>Popular Destinations</h2>
      <p>Explore some of the best tips from around the city from our partners and friends.</p>

      <div className="cards-container row" >
        <div className="Rome col-12 col-md-6" data-aos="fade-right" data-aos-duration="2000">
          <Cards   Image="http://easybook.kwst.net/images/city/7.jpg" Title="Rome" Info="Constant care and attention to the  patients makes good record" Hotels="45 Hotels"/>
        </div>
        <div className="Paris col-12 col-md-6 " data-aos="fade-left" data-aos-duration="2000">
          <Cards  Image="https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2018/07/frankreich-paris-paris-hat-viele-schocc88ne-sehenswucc88rdigkeiten-zu-bieten-unter-anderem-137-museen-200-kirchen-37-brucc88cken-sowie-463-parks-und-gacc88rten-frankreich-eyetronic.jpg" Title="Paris" Info="Constant care and attention to the patients makes good record" Hotels="79 Hotels"/>
        </div>
        <div className="Dubai col-12 col-md-6 col-lg-4" data-aos="fade-up-right" data-aos-duration="2000">
          <Cards Image="http://easybook.kwst.net/images/city/5.jpg" Title="Dubai" Info="Constant care and attention to the patients makes good record" Hotels="43 Hotels"/>
        </div>
        <div className="London col-12 col-md col-lg-4" data-aos="fade-up" data-aos-duration="2000">
          <Cards Image="http://easybook.kwst.net/images/city/2.jpg" Title="London" Info="Constant care and attention to the patients makes good record" Hotels="27 Hotels"/>
        </div>
        <div className="NewYork col-12 col-md-6 col-lg-4" data-aos="fade-up-left" data-aos-duration="2000">
          <Cards Image="http://easybook.kwst.net/images/city/6.jpg" Title="NewYork" Info="Constant care and attention to the patients makes good record" Hotels="56 Hotels"/>
        </div>
      </div>
    </div>
  )
}

export default PopularDestinations