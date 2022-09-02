import React, {useContext} from 'react';
import styled from 'styled-components';
import {MdAddShoppingCart} from 'react-icons/md';

import { ProductComplete, ProductType } from '../pages/Home';
import { CartContext, useCart } from '../hooks/useCart';

interface ProductProps {
  data: ProductType
}

export const Product = ({data}: ProductProps) => {
  const context = useContext(CartContext);

  return (
    <ProductContainer>
      <img src={data.image || ""} alt="product"/>
      <strong>{data.title || ""}</strong>
      <span>{data.price || ""}</span>
      <button onClick={() => console.log(context?.addToCart(data))}>
        <div>
          <MdAddShoppingCart size={16} color="#FFF" />
          
          {context?.cart.find(productContext => productContext.id === data.id)?.quantity || 0}
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </ProductContainer>
  )
}

const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 250px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      min-height: 50px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: #E3313C;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: #E95A63;
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
`;