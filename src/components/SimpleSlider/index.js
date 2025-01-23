import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from '@ant-design/react-slick'
import './index.css'

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div className="carouselcontent">
        <p className="carouselcontentparagrapgh">RENEW YOUR LOOK</p>
        <h1 className="carouselcontentheading">
          A TRADITION OF QUALITY CLEANING
        </h1>
        <button className="carouselcontentbutton">Contact us</button>
      </div>
      <div className="carouselcontent">
        <h3 className="carouselcontentparagrapgh">2</h3>
      </div>
      <div className="carouselcontent">
        <h3 className="carouselcontentparagrapgh">3</h3>
      </div>
    </Slider>
  )
}

export default SimpleSlider
