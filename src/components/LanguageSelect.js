
import React, { useContext } from 'react';

import { languageOptions } from '../languages';

import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelect = () => {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        // set selected language by calling context method
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <section className='language-select'>
            <h2>
                Choose Language
            </h2>
            <select 
                onChange={handleLanguageChange}
                value={languageContext.language.id}
            >
                {languageOptions.map(item => (
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.text}
                    </option>
                ))}
            </select>


        </section>

    );
};



export default LanguageSelect;
