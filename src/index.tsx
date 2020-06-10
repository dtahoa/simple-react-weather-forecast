import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import Logger from 'redux-logger';
import { StoreContext } from 'redux-react-hook';

import './index.css';
import AppLayout from './layouts/app';
import PageNotFound from './components/notfound';

import * as serviceWorker from './serviceWorker';
import apiReducer from './reducers/apiReducer';

const reducers = combineReducers({ api: apiReducer });
const middleWares = [thunk, Logger, promiseMiddleware];
const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);
const store = createStoreWithMiddleWare(reducers);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppLayout} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
