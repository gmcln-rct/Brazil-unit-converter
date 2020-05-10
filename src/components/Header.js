import React from 'react';

const Header = () => {

    return (
        <div className = "header-section">
            
            <img src='purpleflag.svg' alt="Copo e colher - Brazilian Unit Converter logo" className='logo'/>
                
            <h1>Brazil Recipe Converter</h1>

            {/* <h2>Convert between Brazilian and U.S./Metric Measurement</h2> */}
            <details>
                <summary>Convert between Brazilian and U.S./Metric Measurement</summary>
                <p>The units of measurement used in Brazil are different that in the U.S. and Europe, causing confusion when converting recipes. This app address tjos problem by enabling users to convert between different units of volume, in English or Portuguese</p>
                <p>Developed by Glenn McClanan with React Hooks and Context API.</p>

            </details>

        </div>
    )

};

export default Header;