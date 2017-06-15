"use strict"

import {combineReducers} from 'redux';

//IMPORT REDUCERS TO BE COMBINED
import bookReducers from './bookReducers';

export default combineReducers({
  books: bookReducers
});
