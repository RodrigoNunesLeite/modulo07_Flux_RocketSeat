import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

// o rootReducer retorna uma lista de reducers
const store = createStore(rootReducer, enhancer);

export default store;
