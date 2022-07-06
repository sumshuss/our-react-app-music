import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import { Header, JustinBieber, KateBush, Rammstein } from './components';
import Layout from './layouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Header />} />
        <Route path="katebush" element={<KateBush />} />
        <Route path="justinbieber" element={<JustinBieber />} />
        <Route path="rammstein" element={<Rammstein />} />
      </Route>
    </Routes>
  );
}

export default App;
