import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import SlickData from './SlickData';
import data from './data';
import Slider from "react-slick";
export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        
        <>
        {SlickData.map (item => (
        <div className="mt-5 fw-bolder p-5">
          <h1>{item.name}</h1>
          <Slider {...settings}>
          {data.map(items => (
          
            <div className=" gap-4">
              <img style={{height: 300}} src={items.coverImage}/>
            </div>
          ))}
          </Slider>
          
        </div>))}
        
        </>
      );
    }
  }