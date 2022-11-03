import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from '../pages/Contact/contact';
import Home from '../pages/home';
import ProductDetail from '../pages/ProductDetail/productDetail';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detalle-producto" element={<ProductDetail />} />
        <Route exact path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;