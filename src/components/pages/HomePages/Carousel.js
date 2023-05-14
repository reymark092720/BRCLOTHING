import React, { Component } from "react";
import Slider from "react-slick";
import data from "../data";
export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className="d-flex">
        <Slider {...settings}>
        {data.map(items => (
          
          <div>
            <img style={{height: 270}} src={items.coverImage} alt="" className="mx-auto d-block"/>
          </div>
        ))}
        </Slider>
        <Slider {...settings}>
        {data.map(items => (
          
          <div>
            <img style={{height: 270}} src={items.coverImage} alt="" className="mx-auto d-block"/>
          </div>
        ))}
        </Slider>
      </div>
    );
  }
}



// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <Image
//         fluid
//         style={{height: "590px"}}
//           className="d-block w-100"
//           src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Image
//         fluid
//         style={{height: "590px"}}
//           className="d-block w-100"
//           src="https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Image
//         fluid
//         style={{height: "590px"}}
//           className="d-block w-100"
//           src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;