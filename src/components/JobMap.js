import React, { Component } from 'react';
import Map from 'google-maps-react';

class JobMap extends Component {

  render() {
    return(
      <div className="map-container">
        <div className="map">
          This is/will be the map itself.
          <Map google={window.google}></Map>
        </div>

        <div className="map-marker-details">
          Location Details go here.
        </div>
      </div>
    )
  }
}

export default JobMap;
