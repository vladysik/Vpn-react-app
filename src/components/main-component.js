import React, { Component } from 'react';

import WelcomeSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter, Route, Link} from "react-router-dom";

import WelcomeImage from '../images/welcome.png';

export default class MainComponent extends Component {

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <div className="MainComponent">
        <div className="MainComponent__image">
          <img src={WelcomeImage} className="Welcome-image" alt="welcome" />
        </div>
        <div className="MainComponent__slider">
          <WelcomeSlider {...settings}>
            <div>
              <h1>Enjoy VPN app</h1>
              <p>
                Watch blazing-fast streaming media, 
                video chat with your friends, and defeat ISP throttling.<br/> 
                All with best-in-class security and privacy.
              </p>
            </div>
            <div>
              <h1>Easy-to-use apps for every device</h1>
              <p>
                ExpressVPN has apps for all your favorite devices and platforms, 
                like Windows, Mac, iPhone, iPad, Android, routers, and Linux,<br/> 
                plus manual configurations for various other routers and devices. 
              </p>
            </div>
            <div>
              <h1>World-class speed and security</h1>
              <p>
                We’re the world’s leading premium VPN provider,<br/> 
                with 160 server locations in 94 countries.
              </p>
            </div>
          </WelcomeSlider>
        </div>
        <div className="MainComponent__button">
          <Link to="/vpn">GET STARTED</Link>
        </div>
      </div>
    );

  }

}
