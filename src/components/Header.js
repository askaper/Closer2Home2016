import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      <div>
        <div className="header-top">
          Header top - Probably stateless
        </div>
        <div className="header-bottom">
          Header bottom - Definitely stateful
        </div>
      </div>

    )
  }
}

export default Header;
