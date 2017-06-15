"use strict"
// IMPORT DEPENDENCIES
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

// IMPORT Bookslist Component
import BooksList from './components/pages/booksList';

// Create logger middleware
const middleware = applyMiddleware(logger);

// Create store
const store = createStore(reducers, middleware);

//Provide booksList with redux store
render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);
