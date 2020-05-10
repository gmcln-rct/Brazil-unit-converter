import React from 'react';

const Header = () => {

    return (
        <div className = "header-section">
            
            <img src='purpleflag.svg' alt="Copo e colher - Brazilian Unit Converter logo" className='logo' aria-label='Copo e colher - Brazilian Unit Converter logo'/>
                
            <h1>Brazil Recipe Converter</h1>

            <details>
                <summary>Convert between Brazilian and U.S./Metric Measurements</summary>
                <p>The units of measurement used for recipes in Brazil are different than in the U.S. and Europe, often causing confusion when converting amounts. This app enables you to convert between different recipe measurements in English or Portuguese</p>
                <p>Developed by Glenn McClanan using React Hooks and Context API.</p>
            </details>

        </div>
    )

};

export default Header;