import React, { Component } from 'react';
import OfflineImage from '../images/offline.png';

export default class VPNComponent extends Component {

  render() {

    return (
      <div className="VPNComponent">
        <div className="VPNComponent__title">
          <h1>VPN master</h1>
        </div>
        <div className="VPNComponent__label">
          <p>Disconnected</p>
          <div className="circle"></div>
        </div>
        <div className="VPNComponent__image">
          <img src={OfflineImage} className="Offline-image" alt="offline" />
        </div>
        <div className="VPNComponent__button">
          <button>CONNECT NOW</button>
        </div>
      </div>
    );

  }

}
