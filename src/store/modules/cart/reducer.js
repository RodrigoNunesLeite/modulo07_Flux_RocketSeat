/**
 * Todo reducer recebe por padrao, um state e um action
 *
 * state é o array vazio, o state antes da chamada do reducer
 */

/**
 * Um comportamento do redux, é que ao executar o
 * dispatch, todos os reducers são chamados,
 * para evitar isso, usamos o case, para retornar
 * alguma ação apenas como o type da action for especifico
 *
 * state = [] = inicializando o state
 */

/**
 * A partir do momento que a action é executada,
 * o redux informa todos os componentes que estão
 * usando o connect e retornando o cart que é nosso
 * reducer e vira o objeto no state
 */

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
