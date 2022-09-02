import React, {useMemo} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = useMemo(() => {
    const total = cart.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [cart]);

  return (
    <Container>
      <Wrapper>
      <Link to="/">
        <h2>eStoregio Marketplace</h2>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={20} color="#FFF" />
      </Cart>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.header`
  padding: 25px;
  background: #151619;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px;

a {
    text-decoration: none;
    color: #E3313C;
    transition: opacity 0.2s;
    font-size: 14px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #DDDFE4;
    }
  }
`;

export default Header;