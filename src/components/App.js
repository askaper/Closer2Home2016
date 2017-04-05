import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Details from './Details';
import MapContainer from './MapContainer';
import Script from 'react-load-script';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scriptLoaded: false,
      scriptError: false
    }
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFTQw147or_eOBf4FY7bQliAuHcuVQSZc&libraries=places&callback=initAutocomplete"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="header">
          <Header />
        </div>
        <div className="main-map-container">
          {this.state.scriptLoaded ? <MapContainer /> : <div>Loading...</div>}
        </div>
        <div className="details">
          <Details />
        </div>
      </div>
    );
  }
}

export default App;
