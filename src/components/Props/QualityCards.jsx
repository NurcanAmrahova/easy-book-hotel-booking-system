import React from 'react'
import "./QualityCards.css"
const QualityCards = ({Image, Name, Info}) => {
  return (
    <>
    <div className="quality-card">
      <div className="image">
        <img src={Image} alt="" />
      </div>
      <h4 className="name">{Name}</h4>
      <div className="info">{Info}</div>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default QualityCards