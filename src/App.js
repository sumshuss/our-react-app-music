
import React, {useState} from 'react';

import './App.css';
import {Header, JustinBieber, KateBush, Rammstein} from './components'

function App() {

  const [counter, setCounter] = useState(0)

  return (
  <>
    <Header />
    <KateBush />

    <JustinBieber />

    <Rammstein />
  </>
  );
}

export default App;
