import React from 'react'
import Introduction from '../Introduction';
import PartnersSection from './AboutPage/PartnersSection';
import PopularDestinations from '../PopularDestinations';
import DesignSection from '..//DesignSection';
import WhyChooseUs from '../WhyChooseUs';
import Counter from '../Counter';
import Footer from '../Footer'
const Home = () => {
  return (
    <>
    <Introduction/>
    
    <PopularDestinations/>
    <DesignSection/>
    <WhyChooseUs/>
    <Counter/>
    <Footer/>
    </>
  )
}

export default Home