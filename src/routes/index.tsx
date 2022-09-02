import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import Cart from '../pages/Cart';

export const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}