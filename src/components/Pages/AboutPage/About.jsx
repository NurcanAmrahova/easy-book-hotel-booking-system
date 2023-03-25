import React from 'react'
import './About.css'
import Counter from '../../Counter'
import WhyChooseUs from '../../WhyChooseUs'
import PartnersSection from './PartnersSection'
import { AiFillStar } from 'react-icons/ai'
import Footer from '../../Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
  AOS.init({

  })

    return (

        <div className="about-section">

            <div className="about">
                <div className="overlay-about"></div>
                <div className="about-text-container">
                    <div className="star-icon-container" >
                        <AiFillStar className='little-star' data-aos="flip-right" data-aos-duration="1500"/>
                        <AiFillStar className='big-star' data-aos="flip-right" data-aos-duration="1500"/>
                        <AiFillStar className='little-star ' data-aos="flip-right" data-aos-duration="1500"/>
                    </div>
                    <h1 data-aos="flip-right" data-aos-duration="1800">About Us</h1>
                    <p data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut nec tincidunt arcu, sit amet fermentum sem.</p>
                </div>
            </div>

            <div className="about-us row" data-aos="zoom in" data-aos-duration="2000">
                <div className="about-left-side col-12 col-md-12 col-lg-6" data-aos="zoom-in-left" data-aos-duration="2200">
                    <img src="http://easybook.kwst.net/images/all/9.jpg" alt="" className='w-100'/>
                 
                </div>
                <div className="about-right-side col-12 col-md-12 col-lg-6" data-aos="zoom-in-left" data-aos-duration="2200">
                    <h3 className='w-100'>Our Awesome Story</h3>
                    <hr />
                    <p className='w-100'>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.</p>
                    <p className='w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut possimus ea, eum omnis excepturi voluptatibus reiciendis asperiores qui at, rerum velit, officia perspiciatis deserunt cum voluptates quae sit. Expedita numquam eos, earum aliquam aspernatur dolores repudiandae perferendis eveniet tempore odio explicabo laudantium dicta dignissimos natus excepturi reiciendis porro totam iure!</p>
                </div>
            </div>
            <PartnersSection />
            <WhyChooseUs/>
            <Counter/>
            <Footer/>
            
        </div>
    )
}

export default About