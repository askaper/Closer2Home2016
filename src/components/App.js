import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Details from './Details';
import Map from './Map';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="map-container">
          The map component goes here - Absotivley posolutely stateful component right hurr
          <Map />
        </div>
        <div className="details">
          <Details />
        </div>
      </div>
    );
  }
}

export default App;
