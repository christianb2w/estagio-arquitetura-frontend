import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

export const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}
