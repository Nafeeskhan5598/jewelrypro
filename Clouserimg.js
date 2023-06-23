import React, { useRef } from "react";
import '../Style/clouser.css';
// import React, { Component } from "react";
import Slider from "react-slick";
// import Logofor from "../logos/Logfor";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function Clouserimg() {
    var settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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

<div className="container-flued logos">
      
        <Slider {...settings}>
          <div className="logos-item">
           <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-008.png"  alt="logo1" />
          </div>
          <div className="logos-item">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-007.png" alt="logo2" /> 
          </div>
          <div className="logos-item">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-006.png" alt="logo3" />
          </div>
          <div className="logos-item">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-005.png" alt="logo4" />
          </div>
          <div className="logos-item"> 
           <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-004.png" alt="logo5" />
          </div>
          <div className="logos-item">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-003.png" alt="logo6" />
          </div>
          <div className="logos-item">
            <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-001.png" alt="logo7" />
          </div>
          <div className="logos-item">
           <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/logo-002.png" alt="logo8" />
          </div>
        </Slider>
      </div>
        </>
    )
}
export default Clouserimg;