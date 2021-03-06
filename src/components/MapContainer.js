import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Search from './Search';


class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myLatLng: {
        lat: 41.8786738,
        lng: -87.6425221
      },
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

  render() {

    const createMapOptions = () => {
      return {
        scrollwheel: false
      }
    }

    return (
      <div className="map-container">
        <div className="map">
          {this.state.scriptLoaded ? <Search/> : <div></div>}
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyCFTQw147or_eOBf4FY7bQliAuHcuVQSZc',
              language: 'en'
            }}
            classname={'map'}
            center={this.state.myLatLng}
            zoom={15}
            options={createMapOptions}
            >
         </GoogleMap>
         <Search />
        </div>
      </div>
    )
  }
}

export default MapContainer;
