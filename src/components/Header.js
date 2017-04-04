import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
    this.changeAddress = this.changeAddress.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
  }

  changeAddress(event) {
    this.setState({ address: event.target.value });
  }

  submitAddress(event) {
    alert(`Testing that ${this.state.address} works!`);
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <div className="header-top">
          <div className="header-top-logo">
            <p className="logo">Closer 2 Home</p>
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
          <div className="header-slogan-text-areas">
            <p className="slogan">An easier commute makes a work of difference...</p>
            <p className="header-tagline">Find a job, post a job, let the neighbors know!</p>
          </div>
          <div className="address-lookup-form">
            <div className="address-lookup">
              <form className="search-form" action="" onSubmit={this.submitAddress}>
                <input type="text" value={this.state.address} onChange={this.changeAddress} placeholder="Enter an address!"/>
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
