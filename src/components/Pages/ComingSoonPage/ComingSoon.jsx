import React, { useEffect, useRef, useState } from 'react'
import './ComingSoon.css'
import Typed from 'react-typed';
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ComingSoon = () => {
  AOS.init({

  })

  const [date, setDate] = useState(() => {
       const localDate = localStorage.getItem("date")
       return localDate 
       ? moment(JSON.parse(localDate))
        : moment().add(30, 'days')
  })

  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')


  let interval = useRef

  useEffect(() => {
    GeriSayim()
    return clearInterval(interval.current)
  }, [date])

  const GeriSayim = () => {
    interval = setInterval(() => {
      localStorage.setItem("date", JSON.stringify(date));
      const now = moment()
      const distance = date - now
      const days = moment.duration(distance).days()
      const hours = moment.duration(distance).hours()
      const minutes = moment.duration(distance).minutes()
      const seconds = moment.duration(distance).seconds()

      if (distance < 0) {
        clearInterval(interval.current)
      }
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)
  }






      

    return (
      <div className="coming-soon">
        <div className="text">

          <Typed
            className='h1'
            strings={[
              'Our new website is Coming Soon!']}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
          </Typed>

          <div className="back-counter row" data-aos="flip-left" data-aos-duration="2000">
            <div className="days count col-12 col-md-6 col-lg-3">
              <h1>{days}</h1>
              <small>Days</small>
            </div>
            <div className="hours count col-12 col-md-6 col-lg-3">
              <h1>{hours}</h1>
              <small>Hours</small>
            </div>
            <div className="minutes count col-12 col-md-6 col-lg-3">
              <h1>{minutes}</h1>
              <small>Minutes</small>
            </div>
            <div className="seconds count col-12 col-md-6 col-lg-3">
              <h1>{seconds}</h1>
              <small>Seconds</small>
            </div>
          </div>
          <p data-aos="fade-up" data-aos-duration="2200">We are doing new launch app</p>
          <div className="connect" data-aos="fade-up" data-aos-duration="2200">
            <a href="mailto:nurcanemrahova@gmail.com">Send Email</a>
            <a href="tel:+994509709585">Call</a>
          </div>
        </div>
      </div>
    )
  }

  export default ComingSoon
