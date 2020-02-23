import React, { useContext, useState, useEffect } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

const UnitSelect = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    // const [fromUnit, toUnit] = useState('');
    // let chooseTheme = function() {
    //     return '';
    // }

    const [convertedVal, setConvertedVal] = useState(1);
    const [amount, setAmount] = useState(0);
    const [fromUnit, setFromUnit] = useState(1);
    const [toUnit, setToUnit] = useState(1);

    const [fromUnits, setfromUnits] = useState([
        { label: "Teaspoon (BZ)", value: "tea-bz", conversion: 5 },
        { label: "Dessert spoon (BZ)", value: "dessert-bz", conversion: 10 },
        { label: "Soup spoon (BZ)", value: "soup-bz", conversion: 15 },
        // { label: "Teacup (BZ)", value: "cup-tea-bz" },
        // { label: "Cup (BZ)", value: "cup-bz" },
        // { label: "Teaspoon (US)", value: "tea-us" },
        // { label: "Tablespoon (US)", value: "table-us" },
        // { label: "Cup (US)", value: "cup-us" },
    ]);

    const [toUnits, setToUnits] = useState([
        { label: "Milliliter", value: "mil", conversion: 1 },
        { label: "Cup (US)", value: "cup-us", conversion: 250 },
    ]);

    useEffect(() => {
        setConvertedVal(amount *fromUnit / toUnit)
    }, [amount,fromUnit, toUnit]);

    // const 

    function handleChange(e) {
        // chooseTheme(e.target.value);
        let idx = e.target.selectedIndex;

        console.log(e.target.options[idx].value);
        return (
            <div>Dogs and cats</div>
        )
    };

    function handleSubmit(e) {
        e.preventDefault();
    };


    return (
        <div className="unit-form">
                <span>

                    <input
                        id="amount"
                        label="Amount"
                        name="tsp-bz"
                        type='number'

                        autoFocus
                        // inputProps={{ "data-testid": "tsp-bz" }}
                        value={
                            amount
                        }
                        // onChange={event => tryConvert(event.target)}
                        onChange={event => setAmount(event.target.value)}
                    />
                <select
                    className="select-from"
                    value={fromUnit}
                    onChange={setFromUnit}
                >

                {fromUnits.map(({ label, value, conversion }) => (
                    <option key={value} value={conversion}>
                        {label}
                    </option>
                ))}

                </select>

                <span> to </span>


                <select
                    className="select-to"
                    value={toUnit}
                    onChange={setToUnit}
                >
                    {toUnits.map(({ label, value, conversion }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}

                </select>
                </span>
            <p>{convertedVal}</p>
        </div>
    );
};


export default UnitSelect;
