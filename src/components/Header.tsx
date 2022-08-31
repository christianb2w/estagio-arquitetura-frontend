import React from "react";
import { MdShoppingBasket } from "react-icons/md"
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <h2>Estágio Store</h2>
        </Link>

        <Link to="/cart">
          <div>
            <div>
              <strong>Meu Carrinho</strong>
              <span>1 item</span>
            </div>
            <MdShoppingBasket size={20} color="#fff" />
          </div>
        </Link>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background: #151619;
  padding: 25px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1024px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }


  h2 {
    color: #E3313C;
  }

  div {
    display: flex;
    align-items: center;

    div {
      flex-direction: column;
      text-align: right;
      margin-right: 10px;
      color: #fff;
      strong {
        display: block;
      }
      span {
        text-align: right;
      }
    }
  }
`;