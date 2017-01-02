import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-top">
          <div className="header-top-logo">
            Blah blah Change text here!
          </div>
          <div className="header-top-nav-items">
            <ul className="links">
              <li>Home</li>
              <li>Submit a Job</li>
              <li>Find a Job</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-slogan-text">
            <p className="slogan">An easier commute makes a work of difference...</p>
            <p className="header-tagline">Find a job, post a job, let the neighbors know!</p>
          </div>
          <div className="address-lookup-form">
            <div className="address-lookup">
              <form action="">
                <input type="text" placeholder="Enter Your Address"/>
                <button type="submit">Take a Closer Look</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
