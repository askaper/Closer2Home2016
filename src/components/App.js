import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Map from './Map';

class App extends Component {

  render() {
    return (
      <div className="all">
        <div className="header">
          <Header />
        </div>
        <div className="map-container">
          The map component goes here - Absotitley posolutely stateful component right hurr
          <Map />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
