import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div>
        <div className="details-top">
          Footer Top - May or may not be stateful
        </div>
        <div className="details-bottom">
          Footer Bottom - Most likely stateless
        </div>
      </div>
    )
  }
}

export default Details;
