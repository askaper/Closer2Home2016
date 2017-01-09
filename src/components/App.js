import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Details from './Details';
import MapContainer from './MapContainer';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="main-map-container">
          <MapContainer />
        </div>
        <div className="details">
          <Details />
        </div>
      </div>
    );
  }
}

export default App;
