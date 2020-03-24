/**
 * Esse componente permite o uso de mais de um reducer
 * na nossa aplicação
 */
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
