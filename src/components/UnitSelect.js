import React, { useContext, useState } from "react";

import { UnitContext } from "../contexts/UnitContext";

const ThemeSelect = () => {
    const { setUnit } = useContext(UnitContext);

    const [fromUnit, toUnit] = useState('');
    let themeName = 'larry';
    let chooseTheme = function() {
        return '';
    }

    const [fromItems] = useState([
        { label: "Teaspoon (BZ)", value: "tea-bz" },
        { label: "Dessert spoon (BZ)", value: "dessert-bz" },
        { label: "Soup spoon (BZ)", value: "soup-bz" },
        { label: "Teacup (BZ)", value: "cup-tea-bz" },
        { label: "Cup (BZ)", value: "cup-bz" },
        { label: "Teaspoon (US)", value: "tea-us" },
        { label: "Tablespoon (US)", value: "table-us" },
        { label: "Cup (US)", value: "cup-us" },
    ]);

    function handleChange(e) {
        chooseTheme(e.target.value);
        let idx = e.target.selectedIndex;
        themeName = e.target.options[idx].innerText;
        return (
            <div>Dogs and cats</div>
        )
    };

    function handleSubmit(e) {
        e.preventDefault();
    };


    return (
        <div className="unit-form">
            <form onSubmit={handleSubmit}>
                <span>
                <label>
                    Enter Amount
                    <input type="number" name="amount" min="0"/>
                </label>

                <select
                    className="select-from"
                    value={fromUnit}
                    onChange={handleChange}
                >
                    {fromItems.map(item => (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>

                {/* <select
                    className="select-from"
                    value={fromUnit}
                    onChange={handleChange}
                >
                    <option value="tea-us">teaspoon (US)</option>
                    <option value="table-us">tablespoon (US)</option>
                    <option value="cup-us">cup (US)</option>
                    <option value="tea-bz">teaspoon (BZ)</option>
                    <option value="dessert-bz">dessert spoon (BZ)</option>
                    <option value="soup-bz">soup spoon (BZ)</option>
                    <option value="cup-tea-bz">tea cup (BZ)</option>
                    <option value="cup-bz">cup (BZ)</option>
                </select> */}


                <span> to </span>


                <select
                    className="select-to"
                    value={toUnit}
                    onChange={handleChange}
                >
                    <option value="mil">milliliter</option>
                    <option value="tea-us">teaspoon (US)</option>

                </select>
                </span>
            </form>
        </div>
    );
};


export default ThemeSelect;
