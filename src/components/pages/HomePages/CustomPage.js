import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <div>
        <h2>Sales</h2>
        <Slider {...settings}>
          <div>
            <img className="mx-auto" alt="" src={'https://media.discordapp.net/attachments/1098990936786227292/1104051655441383454/SampleProg10.jpg?width=647&height=657'} />
          </div>
          <div>
            <img className="mx-auto" alt="" src={'https://media.discordapp.net/attachments/1098990936786227292/1104051656724844574/SampleProg6.jpg'} />
          </div>
          <div>
            <img className="mx-auto" alt="" src={'https://media.discordapp.net/attachments/1098990936786227292/1104051657022636032/SampleProg4.jpg'} />
          </div>
          <div>
            <img className="mx-auto" alt="" src={'https://media.discordapp.net/attachments/1098990936786227292/1104051656435449946/SampleProg7.jpg'} />
          </div>
        </Slider>
      </div>
    );
  }
}