import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContext {
  cart: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  incrementProduct(id: string): void;
  decrementProduct(id: string): void;
  removeFromCart(id:string): void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider = (props: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = localStorage.getItem(
        '@GoMarketplace:cart',
      );

      if (storagedProducts) {
        setCart([...JSON.parse(storagedProducts)]);
      }

    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const productExistsInCart = cart.find(
        productAssist => productAssist.id === product.id,
      );

      if (productExistsInCart) {
        const cartToIncrement = cart.map(productAssist =>
          productAssist.id === product.id
            ? { ...product, quantity: productAssist.quantity + 1 }
            : productAssist,
        )
        await localStorage.setItem(
          '@GoMarketplace:cart',
          JSON.stringify(cartToIncrement),
        );
        return setCart(cartToIncrement);
      } else {
        const newCartList = [...cart, { ...product, quantity: 1 }]
        await localStorage.setItem(
          '@GoMarketplace:cart',
          JSON.stringify(newCartList),
        );
        return setCart(newCartList);
      }
    },
    [cart],
  );

  const incrementProduct = useCallback(
    async (id: string) => {
      const newProducts = cart.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      setCart(newProducts);

      await localStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts),
      );
    },
    [cart],
  );

  const decrementProduct = useCallback(
    async (id: string) => {
      const newProducts = cart.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );
      setCart(newProducts);

      await localStorage.setItem(
        '@GoMarketplace:cart',
        JSON.stringify(newProducts),
      );
    },
    [cart],
  );

  const removeFromCart = useCallback(
    async (id: string) => {
      const newProducts = cart.filter(product => product.id !== id);
      setCart(newProducts);

      await localStorage.setItem(
        '@GoMarketplace:cart',
        JSON.stringify(newProducts),
      );
    },
    [cart],
  );

  const value = React.useMemo(
    () => ({ addToCart, incrementProduct, decrementProduct, cart, removeFromCart }),
    [cart, addToCart, incrementProduct, decrementProduct, removeFromCart],
  );

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };