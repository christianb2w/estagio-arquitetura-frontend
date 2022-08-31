import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DefaultRoutes } from './routes';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <DefaultRoutes />
    </BrowserRouter>
  );
}

export default App;
