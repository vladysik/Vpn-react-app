import React, { Component } from 'react';
import OfflineImage from '../images/offline.png';
import OnlineImage from '../images/online.png';

export default class VPNComponent extends Component {

  state = {
    isVpnConnected: false,
  }

  render() {

    const isVpnOn = this.state.isVpnConnected;

    return (
      <div className="VPNComponent">
        <div className="VPNComponent__title">
          <h1>VPN master</h1>
        </div>
        <div className={ isVpnOn ? "VPNComponent__label_connected" : "VPNComponent__label_disconnected" }>
          <p>{ isVpnOn ? "Connected" : "Disconnected" }</p>
          <div className="circle"></div>
        </div>
        <div className="VPNComponent__image">
          <img src= { isVpnOn ? OnlineImage : OfflineImage }  className="vpn-status-image" alt="vpn status" />
        </div>
        <div className="VPNComponent__button">
          <button onClick={ () => this.setState({isVpnConnected: !isVpnOn}) }>{ isVpnOn ? "DISCONNECT" : "CONNECT" }</button>
        </div>
      </div>
    );

  }

}
