/**
 * Aqui criamos nossa action
 *
 * depois do type, informamos o conteudo que quisermos
 *
 * Quando o dispatch é executado, todos os reducers da nossa
 * aplicação são executados
 *
 * o dispatch serve para dispararmos as actions do redux, as
 * actions são responsavei para dizer ao redux que queremos modificar
 * nosso estado.
 * É obrigatorio informar um type e o product que passamos é o valor
 * que queremos acrescentar no estado
 */
/**
 * Por conta do redux-saga, o addToCartRequest não sera
 * ouvido pelo reducer, mas será chamada pelo carrinho,
 * sera ouvida pelo saga e depois o saga vai a chamada
 * do addToCartSuccess e esse sim sera ouvido pelo
 * reducer
 */
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
