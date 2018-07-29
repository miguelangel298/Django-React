import logo from '../logo.svg';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Books extends Component {

  render() {
    return (
      <div className="section">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="log" className="App-logo my-5"/></Link>
        </div>
      </div>
    );
  }
}
export default withRouter((Books));
