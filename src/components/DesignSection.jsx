import React from 'react'
import './DesignSection.css'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const DesignSection = () => {
  AOS.init({
    
  })
  return (
    <div className="design-section" data-aos="zoom-in"  data-aos-duration="2500">
      <div className="design-overlay">
      </div>
      <div className="text-container" data-aos="zoom-in"  data-aos-duration="2500">
      <h1>The owner of the hotel or business ?</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo doloribus quisquam laudantium! <br /> Veritatis excepturi laboriosam cupiditate a, repellendus alias!
    </p>
    <Link to="/contact" className='lets-start'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Let's Start
      </Link>

      </div>
      
    </div>
    
  )
}

export default DesignSection