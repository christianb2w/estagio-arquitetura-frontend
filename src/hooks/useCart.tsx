import React,  {createContext, useCallback, useContext, useState} from 'react';
import { useEffect } from 'react';
import { ProductComplete, ProductType } from '../pages/Home';

interface CartProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: ProductComplete[];
  addToCart(item: ProductType): void;
}

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = (props: CartProps) => {
  const [cart, setCart] = useState<ProductComplete[]>([]);

  useEffect(() => {
    async function loadCartFromLocalStorage() {
      const cartLocalStorage = localStorage.getItem("estagio-store:cart");

      if (cartLocalStorage) {
        setCart([...JSON.parse(cartLocalStorage)])
      }
    }

    loadCartFromLocalStorage()
  }, [])

  const addToCart = useCallback(
    (productToAdd: ProductComplete) => {
      const productExistsInCart = cart.find(product => product.id === productToAdd.id);
      console.log("exists", productExistsInCart);
      if(productExistsInCart) {
        const cartToIncrement = cart.map(product => product.id === productToAdd.id ? { ...productToAdd, quantity: product.quantity + 1} : product);
        localStorage.setItem("estagio-store:cart", JSON.stringify(cartToIncrement))
        return setCart(cartToIncrement);
      } else {
        const newCart = [...cart, {...productToAdd, quantity: 1}];
        localStorage.setItem("estagio-store:cart", JSON.stringify(newCart))
        return setCart(newCart);
      }
  }, [cart]);

  const value = React.useMemo(
    () => {
      return {addToCart, cart}
    },
    [cart, addToCart]
  );

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.log("context not working")
  }

  return context;
}

export { CartProvider, useCart, CartContext}