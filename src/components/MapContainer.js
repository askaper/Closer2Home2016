import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from 'google-map-react';
import Search from './Search';
import googleMapLoader from 'google-map-react/lib/utils/loaders/google_map_loader'


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
  componentDidMount() {
    this.props.googleMapLoader();
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
