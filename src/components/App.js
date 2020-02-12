import React from 'react';

import Converter from './Converter';
import UnitContextProvider from '../contexts/UnitContext';

import '../styles/main.scss';

function App() {
  return (
    <div className="main-app">
      <UnitContextProvider>
          <Converter />
      </UnitContextProvider>
    </div>
  );
}

export default App;
