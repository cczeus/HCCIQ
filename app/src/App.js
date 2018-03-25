import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import { Browser, Route, Switch, browserHistory, hashHistory, Router, HashRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers/index.js'

import logo from './logo.svg';

import './App.css';


import Homepage from './containers/Homepage';
import LoginScreen from './containers/Loginpage';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

const store = createStore( rootReducer, applyMiddleware( thunkMiddleware ));

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: ''
    }
  }

  render() {
    return (
       <Provider store={store}>
       <HashRouter>
        <Switch>
          <Route 
            exact path ="/"
            component={LoginScreen} />
            <Route 
            exact path ="/home"
            component={Homepage} />
          </Switch>
        </HashRouter>
       </Provider>
      
    );
  }
}

export default App;