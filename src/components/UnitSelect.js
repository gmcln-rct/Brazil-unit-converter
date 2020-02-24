import React, { useContext, useState, useEffect } from "react";

import { LanguageContext, Text } from "../contexts/LanguageContext";


const UnitSelect = () => {
    // const { dictionary, setLanguage } = useContext(LanguageContext);

    const [convertedVal, setConvertedVal] = useState(1);
    const [amount, setAmount] = useState(1);
    const [fromUnit, setFromUnit] = useState(5);
    const [toUnit, setToUnit] = useState(1);

    const [fromUnits, setfromUnits] = useState([
      { label: "Teaspoon (BZ)", value: "teabz", conversion: 5 },
      { label: "Dessert spoon (BZ)", value: "dspbz", conversion: 10 },
      { label: "Soup spoon (BZ)", value: "sspbz", conversion: 15 },
      { label: "Teacup (BZ)", value: "teacupbz", conversion: 250 },
      { label: "Cup (BZ)", value: "cupbz", conversion: 240 },
      { label: "Teaspoon (US)", value: "tspus", conversion: 4.92 },
      { label: "Tablespoon (US)", value: "tbspus", conversion: 14.79 },
      { label: "Cup (US)", value: "cupus", conversion: 240.001 },
      { label: "Milliliter", value: "ml", conversion: 1 }
    ]);

    const [toUnits, setToUnits] = useState([
      { label: "Teaspoon (BZ)", value: "teabz", conversion: 5 },
      { label: "Dessert spoon (BZ)", value: "dspbz", conversion: 10 },
      { label: "Soup spoon (BZ)", value: "sspbz", conversion: 15 },
      { label: "Teacup (BZ)", value: "teacupbz", conversion: 250 },
      { label: "Cup (BZ)", value: "cupbz", conversion: 240 },
      { label: "Teaspoon (US)", value: "tspus", conversion: 4.92 },
      { label: "Tablespoon (US)", value: "tbspus", conversion: 14.79 },
      { label: "Cup (US)", value: "cupus", conversion: 240.001 },
      { label: "Milliliter", value: "ml", conversion: 1 }
    ]);

    useEffect(() => {
        setConvertedVal(amount *fromUnit / toUnit)
    }, [amount,fromUnit, toUnit]);



    return (
        <main className="unit-form">

                    <section className='amount-span'>
                        <h2>Enter Amount To Convert</h2>
                    <input
                        id="amount"
                        label="Amount"
                        name="tsp-bz"
                        type='number'

                        autoFocus
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                    />


                    </section>
                    <section>
                        <select
                            className="select-from"
                            value={fromUnit}
                            onChange={event => setFromUnit(event.target.value)}
                        >

                        {fromUnits.map(({ label, value, conversion }) => (
                            <option key={value} value={conversion}>
                                {label}
                                {/* <Text tid="value" /> */}
                                {/* {Text.tid} */}
                            </option>
                        ))}

                        </select>

                        <div> to </div>


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

                    </section>
                    <section>
                        <h2>
                            Conversion: 
                        </h2>
                        <span className='converted-val'>{(Number.isInteger(convertedVal) ? convertedVal: convertedVal.toFixed(2))}</span>
                    </section>

        </main>
    );
};


export default UnitSelect;
