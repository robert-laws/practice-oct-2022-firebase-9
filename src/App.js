import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Crud } from './pages/Crud';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crud' element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
