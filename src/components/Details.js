import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div>
        <div className="details-top">
          This will be stateful. This will render selected map marker data
        </div>
        <div className="details-bottom">
          Details bottom - Most likely stateless right here. 
        </div>
      </div>
    )
  }
}

export default Details;
