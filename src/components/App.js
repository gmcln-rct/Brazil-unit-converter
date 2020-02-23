import React from 'react';

import LanguageContextProvider from '../contexts/LanguageContext';

import Header from './Header';
import UnitSelect from './UnitSelect';
import Converted from './Converted';

import '../styles/reset.css';
import '../styles/main.scss';

function App() {
  return (
    <div>
      <LanguageContextProvider>
        <Header />
        <UnitSelect />
        <Converted />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
