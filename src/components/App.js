import React from 'react';

import {LanguageContextProvider} from '../contexts/LanguageContext';

import Header from './Header';
import UnitSelect from './UnitSelect';
import LanguageSelect from './LanguageSelect';


import '../styles/reset.css';
import '../styles/main.scss';
import Converted from './Converted';

function App() {
  return (
    <div>
      <LanguageContextProvider>
        <Header />
        <UnitSelect />
        <LanguageSelect />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
