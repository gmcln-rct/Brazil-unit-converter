import React from 'react';

import UnitContextProvider from '../contexts/UnitContext';

import Header from './Header';
import UnitSelect from './UnitSelect';
import Converted from './Converted';

import '../styles/reset.css';
import '../styles/main.scss';

function App() {
  return (
    <div>
      <UnitContextProvider>
        <Header />
        <UnitSelect />
        <Converted />
      </UnitContextProvider>
    </div>
  );
}

export default App;
