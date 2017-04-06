import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


class Search extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }

  onPlacesChanged = (event) => {
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

    render() {
      return (
        <div>
          <form>
            <input ref="input" {...this.props} type="text" onSubmit={this.onPlacesChanged()}/>
            <button type="submit">Find me something!</button>
          </form>
        </div>
      )
    }
  }

export default Search;
