import React from 'react';
import styled from 'styled-components';
import {MdAddShoppingCart} from 'react-icons/md';

import { ProductType } from '../pages/Home';

interface ProductProps {
  data: ProductType
}

export const Product = ({data: product}: ProductProps) => {
  return (
    <ProductContainer>
      <img src={product.image || ""} alt="product"/>
      <strong>{product.title || ""}</strong>
      <span>{product.price || ""}</span>
      <button>
        <div>
          <MdAddShoppingCart size={16} color="#FFF" />
          3
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