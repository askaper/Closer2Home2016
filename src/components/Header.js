import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      <div>
        <div className="header-top">
          <div className="header-top-logo">
            Closer 2 Home
          </div>
          <div className="header-top-nav-items">
            <ul className="links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Lorem</li>
              <li>Ipsum</li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          Header bottom - Definitely stateful
        </div>
      </div>

    )
  }
}

export default Header;
