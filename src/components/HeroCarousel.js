import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png"
import SafeImage from "./SafeImage";

import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="carousel-contain mt-6">
        <Slider {...settings}>
          <div>
            <SafeImage src={car1} alt="Sukin brightening collection" className="car-pic" />
          </div>

          <div>
            <SafeImage src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/MicrosoftTeams-image_1920x.jpg?v=1649185990" alt="Sukin product collection" className="car-pic" />
          </div>


        

          <div>
            <SafeImage src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Desktop_Hydrating_Spring_Web_banner_1920x.jpg?v=1648834445" alt="Sukin hydrating collection" className="car-pic" />
          </div>

          <div>
            <SafeImage src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Desktop_03-06_Deep_Cleanse_Haircare_1920x.jpg?v=1646555947" alt="Sukin deep cleanse haircare" className="car-pic" />
          </div>

          <div>
            <SafeImage src={car2} alt="Sukin skincare range" className="car-pic" />
          </div>

          <div>
            <SafeImage src={car3} alt="Sukin natural skincare" className="car-pic" />
          </div>



        </Slider>
      </div>
    );
  }
}
