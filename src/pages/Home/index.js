import React, { useState, useEffect } from 'react';
/**
 * Conecta o estado criado no redux, com o nosso
 * componente
 */
// import { connect } from 'react-redux';
/**
 * O use selector, substitui o connect, ele permite
 * selecionar os valores do estado
 *
 * useDispath é usado para disparar nossas actions
 */
import { useDispatch, useSelector } from 'react-redux';

// import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

/**
 * O CartActions contem todas as funcoes do componente actions
 */
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

// amount vem do props
export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    /**
     * Dispatch é usado para disparar uma action para o redux,
     * temos acesso a essa propriedade assim que conectamos
     * nosso componente ao connect do react-redux

    const { addToCartRequest } = this.props;
 */
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
    // dispatch(CartActions.addToCart(product));
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

/**
 * Todo o trecho abaixo foi substituido pelo uso do hooks
 */
/*
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});
*/
/**
 * Transforma actions do redux, em propriedades
 * do nosso componente, por exemplo a funcao
 * addToCart dentro do CartAction pode ser
 * chamada diretamente do props

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);
  */
/**
 * O connect chama uma funcao e nesse caso,
 * estamos passando o valor 'Home' para essa função

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Home);
 */
