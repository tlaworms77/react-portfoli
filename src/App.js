import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Portfolio from './views/Portfolio';
import DrawLayout from './views/Draw/DrawLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/draw' element={<DrawLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
