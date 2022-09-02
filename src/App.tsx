import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/global'
import { CartProvider } from './hooks/useCart';
import { DefaultRouter } from './routes';
import styled from 'styled-components';
import { Theme } from './styles/theme';


function App() {
  return (
    <BrowserRouter>
    <Theme>
      <GlobalStyles />
      <CartProvider>
        <Header />
        <MainContainer>
          <DefaultRouter />
        </MainContainer>
      </CartProvider>
    </Theme>
    
    </BrowserRouter>
  );
}

const MainContainer = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 20px 50px;
`;

export default App;
