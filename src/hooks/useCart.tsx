import React,  {createContext, useState} from 'react';
import { ProductType } from '../pages/Home';

interface CartProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: ProductType[]
}

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const value = React.useMemo(
    () => ({cart, setCart}),
    [cart, setCart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}