
import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const UnitContext = createContext();

const UnitContextProvider = (props) => {

    const [Units, setUnits] = useState([
        {
            selectedOutputType: "teaspoon",
            selectedInputType: "teaspoon",
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
    const [Units, setUnits] = useState([
        { title: "Citizen Kane", director: "Orson Welles", year: "1941", id: 1 },
        { title: "The Waterboy", director: "Frank Coraci", year: "1998", id: 2 },
        { title: "Remains of the Day", director: "Frank Coraci", year: "1989", id: 3 },
        { title: "Moonlight", director: "Barry Jenkins", year: "2017", id: 4 },
        { title: "Harakiri", director: "Masaki Kobayashi", year: "1962", id: 5 }
    ]);

    const addUnit = (title, director, year) => {
        setUnits([...Units, { title, director, year, id: uuid() }]);
    };
    const removeUnit = (id) => {
        setUnits(Units.filter(Unit => Unit.id !== id));
    }

    return (
        <Unit.Provider value={{ Units, addUnit, removeUnit }}>
            {props.children}
        </Unit.Provider>
    );
}

export default UnitProvider;

