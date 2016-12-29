import React, { Component } from 'react';
import '../css/App.css';
import Map from './Map';

class App extends Component {


  render() {
    return (
      <div className="all">
        <div className="header">
          <div className="header-top">
            Header top - Probably stateless
          </div>
          <div className="header-bottom">
            Header bottom - Definitely stateful
          </div>
        </div>
        <div className="map-container">
          The map component goes here - Absotutely posilutely stateful component right hurr
          <Map />
        </div>
        <div className="footer-top">
          Footer Top - May or may not be stateful
        </div>
        <div className="footer-bottom">
          Footer Bottom - Most likely stateless
        </div>
      </div>
    );
  }
}

export default App;
