
import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const UnitContext = createContext();

const UnitContextProvider = (props) => {

    const [Units, setUnits] = useState([
        {
            selectedInputType: "teaspoon",
            selectedOutputType: "teaspoon",
            inputValue: "",
            conversions: ["Brazilian"],
            units: [
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
        <UnitContext.Provider value={{ Units }}>
            {props.children}
        </UnitContext.Provider>
    );
}

export default UnitContextProvider;

