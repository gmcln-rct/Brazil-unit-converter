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
                    <option value="bob">Choose Filter</option>
                    <option value="blur(10px)">Blur</option>
                    <option value="brightness(3)">Brightness</option>
                    <option value="contrast(3)">Contrast</option>
                    <option value="drop-shadow(16px 16px 10px rgba(0,0,0,0.9)">
                        Drop Shadow
            </option>
                    <option value="grayscale(100%)">GrayScale</option>
                    <option value="invert(100%)">Invert</option>
                    <option value="opacity(20%)">Opacity</option>
                    <option value="sepia(100%)">Sepia</option>
                    <option value="saturate(0%)">Saturate/Desaturate</option>
                    <option value="none">Clear Filter</option>
                </select>

            </form>
        </div>
    );
};


export default ThemeSelect;
