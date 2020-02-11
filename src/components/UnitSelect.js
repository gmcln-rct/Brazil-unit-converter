import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";


const ThemeSelect = () => {
    const { chooseTheme } = useContext(ThemeContext);

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
                    Choose from dropdown to explore how different CSS filters affect
                    page elements above.
          </h2>
                <br />
                <select
                    className="select-css"
                    value={filterTheme}
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

            </form>
        </div>
    );
};


export default ThemeSelect;
