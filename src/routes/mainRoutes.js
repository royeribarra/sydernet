import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ayuda from '../pages/Ayuda/ayuda';
import Componentes from '../pages/Category/componentes';
import Computadoras from '../pages/Category/computadoras';
import Perifericos from '../pages/Category/perifericos';
import Portatiles from '../pages/Category/portatiles';
import Contact from '../pages/Contact/contact';
import Faqs from '../pages/Faqs/faqs';
import Home from '../pages/home';
import ProductDetail from '../pages/ProductDetail/productDetail';
import Products from '../pages/Products/products';
import Soporte from '../pages/Soporte/soporte';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ayuda" element={<Ayuda />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/soporte" element={<Soporte />} />
        
        <Route path="/categorias/" element={<Products />}>
          <Route path="portatiles" element={<Portatiles />} />
          <Route path="computadoras" element={<Computadoras />} />
          <Route path="componentes" element={<Componentes />} />
          <Route path="perifericos" element={<Perifericos />} />
          <Route path="impresoras" element={<Portatiles />} />
          <Route path="antivirus" element={<Portatiles />} />
          <Route path="videovigilancia" element={<Portatiles />} />
          <Route path="suministros" element={<Portatiles />} />
          <Route path="software" element={<Portatiles />} />
          <Route path="conectividad-redes" element={<Portatiles />} />
        </Route>

        <Route exact path="/detalle-producto" element={<ProductDetail />} />
        <Route exact path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;