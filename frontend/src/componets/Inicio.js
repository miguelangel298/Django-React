import CoverPage from '../assets/book-1.jpg';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as recoveryActions from '../actions/recoveryActions.js';

class Inicio extends Component {

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img width="50" height="250" src={CoverPage} alt="log" />
                  <span className="card-title">Card Title</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img src={CoverPage} alt="log" />
                  <span className="card-title">Card Title</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    bookName: state.recovery.bookName,
    valid: state.recovery.valid,
    category: state.recovery.category,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(recoveryActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inicio));
