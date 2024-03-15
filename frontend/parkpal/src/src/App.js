import React from 'react';
import Navbar from './components/navbar';
import Parks from './components/parks';
import About from './components/about';
import Background from './components/background';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <> 
    <Navbar />
    
    <div className="container">
      <Routes>
        <Route path='/' element={<Background />} />
        <Route path='/background' element={<Background />} />
        <Route path='/parks' element={<Parks />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;