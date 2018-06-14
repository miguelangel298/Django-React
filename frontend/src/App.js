import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import {Navbar, NavItem} from 'react-materialize'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import Books from './componets/Books.js';
class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Route render={({ location }) => (
          <div className="" >
            <Navbar  brand='logo' right>
              <div className="container-fluid" >
                <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
              </div>
            </Navbar>
            <div className="container">
            </div>
              <TransitionGroup className="container-fluid">
              <CSSTransition key={location.key} classNames="fade"
            timeout={{ enter: 500, exit: 1 }}>
                <Switch location={location}>
                  <Route path="/books" exact component={Books} />

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

export default App;
