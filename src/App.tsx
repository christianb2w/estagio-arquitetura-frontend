import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { DefaultRoutes } from './routes';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';
import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CartProvider>
        <Header />
        <Container>
          <DefaultRoutes />
        </Container>
      </CartProvider>
    </BrowserRouter>
  );
}

const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 20px 50px;
`;

export default App;
