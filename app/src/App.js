import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers/index.js'

import logo from './logo.svg';

import './App.css';


import Homepage from './containers/Homepage';


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
        <Homepage />
       </Provider>
      
    );
  }
}

export default App;