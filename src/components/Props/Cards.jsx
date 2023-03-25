import React from 'react'
import './Cards.css'
const Cards = ({Image,Title,Info,Hotels}) => {

  return (
    <div className="cards ">
        <img src={Image} alt="" />
        <div className="cards-body">
            <div className="cards-text">
            <h3>{Title}</h3>
            <div className="cards-info">{Info}</div>
            <div className="hotels">{Hotels}</div>
             </div>
        </div>
    </div>
  )
}

export default Cards