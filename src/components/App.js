import React from 'react';

import {LanguageContextProvider} from '../contexts/LanguageContext';

import Header from './Header';
import UnitSelect from './UnitSelect';
import LanguageSelect from './LanguageSelect';
import ShareSelect from './ShareSelect';


import '../styles/reset.css';
import '../styles/main.scss';

function App() {
  return (
    <div>
      <LanguageContextProvider>
        <Header />
        <UnitSelect />
        <LanguageSelect />
      </LanguageContextProvider>
        <ShareSelect />
    </div>
  );
}

export default App;
