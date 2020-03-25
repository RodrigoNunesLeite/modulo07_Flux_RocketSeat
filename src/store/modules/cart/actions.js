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
export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
