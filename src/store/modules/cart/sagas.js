/**
 * metodo para conseguirmos chamar a api
 * O call é responsavel por chamar metodos assyncronos
 * e que retornam promises
 *
 * put = metodo usado para disparar a action
 */
import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';
/**
 * esse "*" depois do function significa generator, funciona
 * como um async
 */
/**
 * Essa funcao addToCart, vai buscar os detalhes
 * do produto e inserir no carrinho
 *
 * Quando a action do addToCart for acionada, ao inves
 * de chamar o reducer, vai primeiro passar pelo sagas.
 *
 * O sagas vai pegar os dados da api e depois disso
 * vai chamar o reducer
 *
 * O yield funciona como o await do async, nesse caso
 * é o await do generator
 */

function* addToCart({ id }) {
  /**
   * No call, o primeiro parametro é o metodo
   * e o segundo é o valor que viria dentro do get
   */

  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

/**
 * Aqui vamos cadastrar listener para ouvir as actions,
 * para que assim que forem acionados, executar a action
 * que chame o sagas.js
 *
 * takeLatest = Se o usuario clicar no botão duas vezes e a
 * segunda vez foi antes do saga consultar a api e retornar
 * o valor esperado, ele vai descartar a primeira chamada e
 * cadastrar o produto uma unica vez no carrinho
 */
export default all([
  /**
   * 1º parametro: qual action do redux queremos ouvir
   * 2º parametro: qual funcao queremos disparar
   */
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
