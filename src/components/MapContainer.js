import React, { Component } from 'react';
import Map from 'google-maps-react';

class MapContainer extends Component {

  render() {
    return(
      <div className="map-container">
        <div className="map">
          This is/will be the map itself.
          <Map google={this.props.google}></Map>
        </div>

        <div className="map-marker-details">
          Location Details go here.
        </div>
      </div>
    )
  }
}

export default MapContainer;
