"use strict"

import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT Actions
import {addToCart} from './actions/cartActions';
import {postBooks, updateBook, deleteBook} from './actions/bookActions';

import BooksList from './components/pages/booksList';



// STEP 1 create store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// STEP 2 create and dispatch actions

render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);
