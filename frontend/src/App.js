import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as recoveryActions from './actions/recoveryActions.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import Inicio from './components/Inicio.js';
import Error404 from './components/404.js';
import Publish from './components/Publish.js';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router basename="/">
        <Route render={({ location }) => (
          <div className="" >
            <nav>
              <div className="nav-wrapper">
                <a className="brand-logo"> LOGO </a>
                <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                <ul id=" nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/publish">Publish</Link></li>
                </ul>
              </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/publish">Publish</Link></li>
            </ul>
            <div className="container">
            </div>
            <TransitionGroup className="container-fluid">
              <CSSTransition key={location.key} classNames="fade"
                timeout={{ enter: 500, exit: 1 }}>
                <Switch location={location}>
                  <Route path="/" exact component={Inicio} />
                  <Route path="/publish" exact component={Publish} />
                  <Route  exact component={Error404} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.recovery.loading,
    loaded: state.recovery.loaded,
    email: state.recovery.email,
    err: state.recovery.err,
    message: state.recovery.message,
  };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(recoveryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
