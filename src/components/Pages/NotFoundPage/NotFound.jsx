import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom'
import Footer from '../../Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const NotFound = () => {
  AOS.init({

  })
  return (
    <>
    <div className="not-found-section">


    <div className="not-found row">
        <div className="left-side col-12 col-md-6" data-aos="zoom-in" data-aos-duration="1500">
         <h1 data-aos="flip-right" data-aos-duration = "2000">404 Not Found</h1>
         <p data-aos="fade-up" data-aos-duration="2000">We're sorry, but the Page you were looking for, couldn't be found.</p>
         <Link to='/'className='back-home'  data-aos="fade-up" data-aos-duration="2000"> Back to Home Page</Link>
        </div>
        <div className="right-side col-12 col-md-6" data-aos="zoom-in-left" data-aos-duration="2000">
         <img src="https://res.cloudinary.com/dd5ay5pph/image/upload/v1678357420/new/Picture1_qfdy1d.png" className='w-100' />
        </div>
    </div>
    </div>
     <Footer  className='footer-404'/>
    </>
  )
}

export default NotFound