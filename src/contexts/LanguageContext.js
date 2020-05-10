import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// Create context with default language
export const LanguageContext = createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

// Language context
export function LanguageContextProvider(props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);

    const provider = {
        language,
        dictionary,
        setLanguage: (selectedLanguage) => {
            setLanguage(selectedLanguage);
            setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {props.children}
        </LanguageContext.Provider>
    );
};

// Access text based on selected language
export function Text(props) {
    const languageContext = useContext(LanguageContext);

    return languageContext.dictionary[props.tid];
};