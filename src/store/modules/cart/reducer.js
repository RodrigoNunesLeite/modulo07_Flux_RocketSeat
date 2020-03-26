import produce from 'immer';

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
    case '@cart/ADD_SUCCESS':
      /* return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ]; */
      /**
       * state = é o estado base que enviamos
       * draft = é o que nos criamos
       */
      return produce(state, (draft) => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
