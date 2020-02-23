import React, { useContext, useState, useEffect } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

const UnitSelect = () => {
    const { language, setLanguage } = useContext(LanguageContext);


    const [convertedVal, setConvertedVal] = useState(1);
    const [amount, setAmount] = useState(1);
    const [fromUnit, setFromUnit] = useState(5);
    const [toUnit, setToUnit] = useState(1);

    const [fromUnits, setfromUnits] = useState([
        { label: "Teaspoon (BZ)", value: "tea-bz", conversion: 5 },
        { label: "Dessert spoon (BZ)", value: "dessert-bz", conversion: 10 },
        { label: "Soup spoon (BZ)", value: "soup-bz", conversion: 15 },
        { label: "Teacup (BZ)", value: "cup-tea-bz", conversion: 250 },
        { label: "Cup (BZ)", value: "cup-bz", conversion: 240 },
        { label: "Teaspoon (US)", value: "tea-us", conversion: 4.92 },
        { label: "Tablespoon (US)", value: "table-us", conversion: 14.79 },
        { label: "Cup (US)", value: "cup-us", conversion: 240 },
        { label: "Milliliter", value: "ml", conversion: 1 },
    ]);

    const [toUnits, setToUnits] = useState([
        { label: "Teaspoon (BZ)", value: "tea-bz", conversion: 5 },
        { label: "Dessert spoon (BZ)", value: "dessert-bz", conversion: 10 },
        { label: "Soup spoon (BZ)", value: "soup-bz", conversion: 15 },
        { label: "Teacup (BZ)", value: "cup-tea-bz", conversion: 250 },
        { label: "Cup (BZ)", value: "cup-bz", conversion: 240 },
        { label: "Teaspoon (US)", value: "tea-us", conversion: 4.92 },
        { label: "Tablespoon (US)", value: "table-us", conversion: 14.79 },
        { label: "Cup (US)", value: "cup-us", conversion: 240 },
        { label: "Milliliter", value: "ml", conversion: 1 },
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
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                    />
                <select
                    className="select-from"
                    value={fromUnit}
                    onChange={event => setFromUnit(event.target.value)}
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
                    onChange={event => setToUnit(event.target.value)}
                >
                    {toUnits.map(({ label, value, conversion }) => (
                        <option key={value} value={conversion}>
                            {label}
                        </option>
                    ))}

                </select>
                        <span>
                            => 
                        </span>
                <span className='converted-val'>{(Number.isInteger(convertedVal) ? convertedVal: convertedVal.toFixed(2))}</span>
                </span>

        </div>
    );
};


export default UnitSelect;
