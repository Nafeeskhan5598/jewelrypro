import React from "react";
import '../Style/ring.css';
// import "bootstrap/dist/css/bootstrap.css";

import Image from "react-bootstrap/Image";
import { SketchPicker } from 'react-color';

function FrontRing() {

  return (

    // <div className="ring-image">
    // <div className="ring-img">


    // <Image1 src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg.js/100px250" alt="image" fluid />;
    // </div>
    // </div>
    // <div style={{ display: "block", width: 100%, padding: 30 }}>

    <div className="ring-image">
      <div className="ring-img">
        <Image
          src=
          "https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/hero.jpg" alt="image" fluid />


        <div className="sensation-area">

          <div className="sensation-head">
            <h6 className="elementor-heading-title">New collection</h6>
            </div>

            <div className="sensation-header">
            <h1 className="elementor-heading-title">The new ring sensation</h1>
            </div>

            <div className="sensation-pera">
            <p className="elementor-heading-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>

            <div className="sensation-btn-first">
           <button className="btn-first">SHOP NOW</button>
            </div>




            

      </div>
      </div>
  </div>





  )
}
export default FrontRing;