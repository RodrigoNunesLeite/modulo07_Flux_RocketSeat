import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

// Verificando se o usuario está em ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().use(reactotronRedux()).connect();

  tron.clear();

  console.tron = tron;
}
