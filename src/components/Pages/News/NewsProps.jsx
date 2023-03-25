import React from 'react'
import './NewsProps.css'
const NewsProps = ({Image, Photo}) => {
  return (
    <div className="news-cards">
        <div className="title">Blog Post Title</div>
        <div className="news-image "><img src={Image} alt="" className='w-100' /></div>
        <div className="news-info">In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</div>
        <div className="author">
            <img src={Photo} alt="" />
            <small>By Mery Lynn</small>
        </div>

    </div>
  )
}

export default NewsProps