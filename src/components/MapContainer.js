import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myLatLng: {
        lat: 41.8786738,
        lng: -87.6425221
      }
    }
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          myLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    } else {
      //set as chicago if geolocation not supported
      this.setState({
        myLatLng: {
          lat: 41.8786738,
          lng: -87.6425221
        }
      });
    }
  }

  componentWillMount() {
    this.getUserLocation();
  }

  //if user is viewing from tablet or phone, modal over map giving user option to browse or post 

  render() {

    const mapContainerStyle = {
      width: '100%',
      height: '400px',
      position: 'relative',
      textAlign: 'center'
    };

    return(
      <div className="map-container" style={mapContainerStyle}>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyCFTQw147or_eOBf4FY7bQliAuHcuVQSZc',
              language: 'en'
            }}
            classname={'map'}
            center={this.state.myLatLng}
            zoom={15}
            >
         </GoogleMap>
        </div>
      </div>
    )
  }
}

export default MapContainer;
