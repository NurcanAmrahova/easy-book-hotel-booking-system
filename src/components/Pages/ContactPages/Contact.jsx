import React, { useRef } from 'react'
import './Contact.css'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import Footer from '../../Footer'
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
const Contact = () => {
  const formRef = useRef()
  
  AOS.init({

  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_om7hvmi', 'template_luoh6k8', formRef.current, 'JPgkNBAl_6TuUmtzW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    }

  return (
    <>
    <div className="contact-section" data-aos="fade-up" data-aos-duration="1500">
      <div className="contact row">
        <div className="contact-left-side col-12 col-md-6" data-aos="fade-down" data-aos-duration="2500">
          <div className="adresss">
            <h3>Contacts</h3>
            <hr />
            <div className="info">
              <div className="class"><small>Adress:</small> <a href="#">USA 27TH Brooklyn NY</a></div>
              <hr />
              <div className="class"><small>Phone:</small> <a href="#">+7(123)987654</a></div>
              <hr />
              <div className="class"><small>Mail:</small> <a href="#">AlisaNoory@domain.com</a></div>
              <hr />
              <div className="class"><small> Website:</small> <a href="#">themeforest.net</a></div>
              <hr />
              <Link to="/map" className='map'>Tap to View</Link>
              
            </div>
            <div className="contact-social-media">
              <a href="#"><AiFillFacebook /></a>
              <a href="#"><AiFillInstagram /></a>
              <a href="#"><AiFillTwitterCircle /></a>
              <a href="#"><AiFillYoutube /></a>
            </div>
          </div>

        </div>
        <div className="contact-right-side col-12 col-md-6">
          <form action="" ref = {formRef} onSubmit={sendEmail}>
            <div className="text-email">
            <input type="text" name="name" placeholder='Your Name' required data-aos="zoom-out-right" data-aos-duration="2500"/>
            <input type="email" name="email" placeholder='Your Email' required data-aos="zoom-out-left" data-aos-duration="2500"/>
            </div>
            <div className="your-message">
              <input type="text" name="message" placeholder='Your Message...' data-aos="fade-up" data-aos-duration="2500" />
            </div>
            <button type='submit'className='submit-button' data-aos="fade-left" data-aos-duration="2500"> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit</button>
          </form>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Contact