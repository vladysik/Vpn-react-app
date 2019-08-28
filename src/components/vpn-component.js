import React, { Component } from 'react';
import OfflineImage from '../images/offline.png';
import OnlineImage from '../images/online.png';
import CheckedImg from '../images/checked.png';
import UncheckedImg from '../images/unchecked.png';
import DropdownImg from '../images/dropdown.png';
import AutomaticImg from '../images/automatic.png';
import NewYorkImg from '../images/united-states.png';
import LondonImg from '../images/united-kingdom.png';
import MoscowImg from '../images/russia.png';
import SwedenImg from '../images/sweden.png';
import MelbourneImg from '../images/australia.png';
import NewDelhiImg from '../images/india.png';

export default class VPNComponent extends Component {

  constructor() {

    super();

    this.state = {
      isServerSelect: false,
      isVpnConnected: false,
    }

    this.showServers = this.showServers.bind(this)
    this.toggleVpn = this.toggleVpn.bind(this)

  }

  showServers(event){
    event.preventDefault()
    this.setState({
      isServerSelect : !this.state.isServerSelect
    })
  }

  toggleVpn(event) {
    event.preventDefault()
    this.setState({
      isVpnConnected : !this.state.isVpnConnected
    })
  }

  chooseServerClick() {
    console.log("server");
  }

  render() {

    const {isServerSelect} = this.state;

    const {isVpnConnected} = this.state;

    const serversArray = [
      [AutomaticImg, "Automatic"], 
      [NewYorkImg, "New York"],
      [LondonImg, "London"],
      [MoscowImg, "Moscow"],
      [SwedenImg, "Sweden"],
      [MelbourneImg, "Melbourne"],
      [NewDelhiImg, "New Delhi"]
    ];

    const serversItems = serversArray.map((server) => 
      <li onClick={this.chooseServerClick}>
        <img src={server[0]} alt="server"/>
        <p>{server[1]}</p>
        <img src={UncheckedImg} alt="checkbox"/>
      </li>
    );

    return (
      <div className="VPNComponent">
        <div className="VPNComponent__title">
          <h1>VPN master</h1>
        </div>
        <div className={ isVpnConnected ? "VPNComponent__label_connected" : "VPNComponent__label_disconnected" }>
          <p>{ isVpnConnected ? "Connected" : "Disconnected" }</p>
          <div className="circle"></div>
        </div>
        <div className="VPNComponent__select">
          <div className="title" onClick={ this.showServers }>
            <p>Pick your server: Automatic</p>
            <img src={DropdownImg} alt="pick your server"/>
          </div>
          <div className={ isServerSelect ? "VPNComponent__select-content active" : "VPNComponent__select-content" }>
            <ul>
              {serversItems}
            </ul>
          </div>
        </div>
        <div className="VPNComponent__image">
          <img src= { isVpnConnected ? OnlineImage : OfflineImage }  className="vpn-status-image" alt="vpn status" />
        </div>
        <div className="VPNComponent__button">
          <button onClick={ this.toggleVpn }>{ isVpnConnected ? "DISCONNECT" : "CONNECT" }</button>
        </div>
      </div>
    );

  }

}
