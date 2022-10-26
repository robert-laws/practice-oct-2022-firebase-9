import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Crud } from './pages/Crud';
import { Users } from './pages/Users';
import { AllPublications } from './pages/AllPublications';
import { Publication } from './pages/Publication';
// import { DataLoad } from './pages/DataLoad';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crud' element={<Crud />} />
        <Route path='/users' element={<Users />} />
        <Route path='/publications' element={<AllPublications />} />
        <Route path='/publication/:id' element={<Publication />} />
        {/* <Route path='/load' element={<DataLoad />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
