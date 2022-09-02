import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = (): JSX.Element => {
  return (
    <Container>
      <Link to="/">
        <MdOutlineKeyboardBackspace size={20} color="#151619" />
      </Link>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" alt="Produto" />
            </td>
            <td>
              <strong>Tênis de Corrida</strong>
              <span>R$ 100,00</span>
            </td>
            <td>
              <div>
                <button
                  type="button"
                  onClick={() => {}}
                >
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input
                  type="text"
                  readOnly
                  value={3}
                />
                <button
                  type="button"
                  onClick={() => {}}
                >
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>300</strong>
            </td>
            <td>
              <button
                type="button"
                onClick={() => {}}
              >
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>300</strong>
        </Total>
      </footer>
    </Container>
  );
};

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #e3313c;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #797D8C,
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #DDDFE4;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #DDDFE4;
      border-radius: 4px;
      color: #797D8C;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: #E3313C;
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: #E95A63;
      }
    }
    &:disabled {
      svg {
        color: #EE838A;
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #8e93a5;

    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
