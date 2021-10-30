import { combineReducers } from 'redux';
import bookReducer from './book';
import cartReducer from './cart';

export default combineReducers({
  book: bookReducer,
  cart: cartReducer,
});
