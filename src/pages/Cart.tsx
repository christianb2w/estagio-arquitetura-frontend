import React, { useContext } from "react";
import { CartContext } from "../hooks/useCart";

export const Cart = (): JSX.Element => {
  const context = useContext(CartContext);

  let cartSize = 0;
  context?.cart.forEach(product => {
    cartSize += product.quantity
  });  

  return (
    <div>
      <h1>Tenho {cartSize} itens no meu carrinho</h1>
      <span>{`${context?.cart[0].title}`}</span>
    </div>
  )
}