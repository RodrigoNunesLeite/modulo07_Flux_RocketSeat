import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';

import store from './store';

/**
 * <ToastContainer autoClose={3000}/> = o 3 mil se refere
 * a quantidade de tempo que nossa mensagem ficara exibida
 * no sistema
 *
 * <Router history={history}> = O react router dom está
 * ouvindo tudo o que acontece dentro do history
 */
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
