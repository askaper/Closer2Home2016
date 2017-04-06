import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import googleMapLoader from 'google-map-react/lib/utils/loaders/google_map_loader'


class Search extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }

  onPlacesChanged() {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    //eslint-disable-next-line no-undef
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBoxListener.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.searchBoxListener);
  }

  static defaultProps = {
    googleMapLoader
  }

    render() {
      return (
        <div>
          <input ref="input" {...this.props} type="text"/>
        </div>
      )
    }
  }

export default Search;
