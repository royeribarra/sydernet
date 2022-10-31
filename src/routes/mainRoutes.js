import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../pages/home';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;