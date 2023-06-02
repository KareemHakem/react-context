import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import Context from '../context/Context';

const Navigation = () => {
  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Context>
    </>
  );
};

export default Navigation;
