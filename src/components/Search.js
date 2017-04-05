import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

    render() {

      return (
        <div>
          <input ref="input" {...this.props} type="text"/>
        </div>
      )

    }
    onPlacesChanged = () => {
      if (this.props.onPlacesChanged) {
        this.props.onPlacesChanged(this.searchBox.getPlaces());
      }
    }
    componentDidMount() {
      var input = ReactDOM.findDOMNode(this.refs.input);
      this.searchBox = new google.maps.places.SearchBox(input);
      this.searchBoxListener.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
      this.searchBox.removeListener('places_changed', this.searchBoxListener);
    }

  }

export default Search;
