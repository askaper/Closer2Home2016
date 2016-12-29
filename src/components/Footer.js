import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-top">
          Footer Top - May or may not be stateful
        </div>
        <div className="footer-bottom">
          Footer Bottom - Most likely stateless
        </div>              
      </div>
    )
  }
}

export default Footer;
