import React, { Component } from 'react';

class Map extends Component {


  render() {
    return(
      <div className="map-container">
        <div className="map">
          This is/will be the map itself.
        </div>

        <div className="map-marker-details">
          Location Details go here.
        </div>
      </div>
    )
  }
}

export default Map;
