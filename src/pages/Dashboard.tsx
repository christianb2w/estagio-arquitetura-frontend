import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { api } from '../api';

import { ProductItem } from '../components/ProductItem';
import { useCart } from '../hooks/useCart';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

export const Dashboard = (): JSX.Element => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(item => (
        <ProductItem data={item} key={item.id} />
      ))}
    </ProductList>
  )
}

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;