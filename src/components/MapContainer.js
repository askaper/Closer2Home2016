import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

class MapContainer extends Component {

  render() {
    return(
      <div className="map-container">
        <div className="map">
          This is/will be the map itself.
          <GoogleMap
            classname={'map'}
           center={[59.744465, 30.042834]}
           zoom={10}>

         </GoogleMap>
        </div>

        <div className="map-marker-details">
          Location Details go here.
        </div>
      </div>
    )
  }
}

export default MapContainer;
