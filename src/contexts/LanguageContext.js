
import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {

    const [Languages, setLanguages] = useState([
        {
            selectedInputType: "teaspoon",
            selectedOutputType: "teaspoon",
            inputValue: "",
            conversions: ["Brazilian"],
            Languages: [
                {
                    name: "teaspoon",
                    type: "liquid",
                    conversions: [
                        {
                            inputType: "teaspoon",
                            conversion: (x) => x
                        },
                        {
                            inputType: "dessert spoon",
                            conversion: (x) => x / 12
                        },
                        {
                            inputType: "soup spoon",
                            conversion: (x) => x * 3
                        },
                        {
                            inputType: "cup (Brazilian)",
                            conversion: (x) => x / 30.54
                        },
                        

                    ]
                },
                

            ]
        }
    ]);



    return (
        <LanguageContext.Provider value={{ Languages }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;

