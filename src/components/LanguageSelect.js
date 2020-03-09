import React, { useContext } from 'react';

import { languageOptions } from '../languages';

// import { LanguageContext } from '../contexts/LanguageContext';

import { LanguageContext } from "../contexts/LanguageContext";


const LanguageSelect = () => {
    
    const languageContext = useContext(LanguageContext);
    let selectedLanguage = languageContext.language.id;

    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        // set selected language by calling context method
        languageContext.setLanguage(selectedLanguage);
    };


    // const toggleLanguage = (event) => {
    //     // const selectedLanguage = languageContext.language.id === 0? 1 : 0;
    //     // const currLanguage = languageContext.language.id;
    //     // const selectedLanguage = currLanguage === 'en'? 'pt' : 'en';
    //     console.log(event.target.value==='en');
    //     if (event.target.value === 'en') {
    //          selectedLanguage = 'pt';
    //     } else {
    //          selectedLanguage = 'en';
    //     }
    //     console.log(selectedLanguage);
    //     // const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
    //     // set selected language by calling context method
    //     languageContext.setLanguage(selectedLanguage);
    // };


    return (
        <section className='language-select'>
            {/* <h2>
                Choose Language
            </h2>
            <input
                // checked={isOn}
                onChange={toggleLanguage}
                className="react-switch-checkbox"
                id={selectedLanguage}
                type="checkbox"
                value={selectedLanguage}
            />
            <label
                className="react-switch-label"
                htmlFor={selectedLanguage}
                
            >
                <span className={`react-switch-button`} />
            </label> */}

            <h2>
                {/* <Text tid="chooseLang" /> */}
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