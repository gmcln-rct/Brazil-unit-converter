import React, { useContext, useState } from "react";

import { UnitContext } from "../contexts/UnitContext";


const ThemeSelect = () => {
    const { setUnit } = useContext(UnitContext);

    const [filterTheme] = useState('');
    let themeName = filterTheme;

    function handleChange(e) {
        chooseTheme(e.target.value);
        let idx = e.target.selectedIndex;
        themeName = e.target.options[idx].innerText;
        console.log(themeName);
        return (
            <div>Dogs and cats</div>
        )
    };

    function handleSubmit(e) {
        e.preventDefault();
    };



    return (
        <div className="theme-form">
            <form onSubmit={handleSubmit}>
                {themeName}
                <h1>CSS Filters</h1>
                <h2>
                    Choose measurements for conversion
          </h2>
                <br />
                <select
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
                </select>

                <select
                    className="select-to"
                    value={toUnit}
                    onChange={handleChange}
                >
                    <option value="mil">milliliter</option>
                    <option value="tea-us">teaspoon (US)</option>

                </select>

            </form>
        </div>
    );
};


export default ThemeSelect;
