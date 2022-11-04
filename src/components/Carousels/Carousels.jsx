import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from '../Sliders/Sliders';

export default function Carousels(props) {
  const {movies} = props
  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <Slider {...settings}>
     {movies.map(movieItem => (
      <Sliders key={movieItem.id} details={movieItem}/>
     ))}
    </Slider>
  )
}
