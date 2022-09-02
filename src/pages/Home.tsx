import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import { Product } from "../components/Product";
import { api } from "../api";

export interface ProductComplete {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number
}

export interface ProductType {
  id: string;
  title: string;
  price: number;
  image: string;
}

export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProductsFromAPI() {
      const responseFromAPI = await api.get("/products");
      
      setProducts(responseFromAPI.data);
    }

    getProductsFromAPI();
  }, [])

  return (
    <ProductList>
      {products.map(product => {
        return(
          <Product data={product} key={product.id} />
        )
      })}
    </ProductList>
  )
}

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;