import React from 'react';

import UnitContextProvider from '../contexts/UnitContext';

import Converter from './Converter';
import UnitSelect from './UnitSelect';

import '../styles/reset.css';
import '../styles/main.scss';

function App() {
  return (
    <div>
      <UnitContextProvider>
          <Converter />
        <UnitSelect />
      </UnitContextProvider>
    </div>
  );
}

export default App;
