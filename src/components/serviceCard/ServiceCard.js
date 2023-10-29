import React from 'react'
import "./ServiceCard.css"

const ServiceCard = ({img, txt1, txt2}) => {
  return (
    <div className="servicecard-container">
        <img src={img} alt="" />
        <h3 className='serviceCard-txt'>{txt1}</h3>
        <p className="serviceCard-details">{txt2}</p>
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default ServiceCard