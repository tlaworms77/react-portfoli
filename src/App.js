import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Portfolio from './views/Portfolio';
import Draw from './views/Draw/Draw';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/draw' element={<Draw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
