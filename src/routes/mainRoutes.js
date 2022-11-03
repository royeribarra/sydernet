import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/home';
import ProductDetail from '../pages/ProductDetail/productDetail';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;