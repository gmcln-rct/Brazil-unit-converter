import React, { useContext, useState, useEffect } from "react";

import { LanguageContext, Text } from "../contexts/LanguageContext";


const UnitSelect = () => {
    const { dictionary, setLanguage } = useContext(LanguageContext);

    const [convertedVal, setConvertedVal] = useState(1);
    const [amount, setAmount] = useState(1);
    const [fromUnit, setFromUnit] = useState(5);
    const [toUnit, setToUnit] = useState(1);


    const [fromUnits, setfromUnits] = useState([
      { label: "Teaspoon (BZ)", unitId: "tspbz", conversion: 5 },
      { label: "Dessert spoon (BZ)", unitId: "dspbz", conversion: 10 },
      { label: "Soup spoon (BZ)", unitId: "sspbz", conversion: 15 },
      { label: "Teacup (BZ)", unitId: "teacupbz", conversion: 250 },
      { label: "Cup (BZ)", unitId: "cupbz", conversion: 240 },
      { label: "Teaspoon (US)", unitId: "tspus", conversion: 4.92 },
      { label: "Tablespoon (US)", unitId: "tbspus", conversion: 14.79 },
      { label: "Cup (US)", unitId: "cupus", conversion: 240.001 },
      { label: "Milliliter", unitId: "ml", conversion: 1 }
    ]);

    const [toUnits, setToUnits] = useState([
      { label: "Teaspoon (BZ)", unitId: "tspbz", conversion: 5 },
      { label: "Dessert spoon (BZ)", unitId: "dspbz", conversion: 10 },
      { label: "Soup spoon (BZ)", unitId: "sspbz", conversion: 15 },
      { label: "Teacup (BZ)", unitId: "teacupbz", conversion: 250 },
      { label: "Cup (BZ)", unitId: "cupbz", conversion: 240 },
      { label: "Teaspoon (US)", unitId: "tspus", conversion: 4.92 },
      { label: "Tablespoon (US)", unitId: "tbspus", conversion: 14.79 },
      { label: "Cup (US)", unitId: "cupus", conversion: 240.001 },
      { label: "Milliliter", unitId: "ml", conversion: 1 }
    ]);

    useEffect(() => {
        setConvertedVal(amount *fromUnit / toUnit)
    }, [amount,fromUnit, toUnit]);

 
    return (
      <main className="unit-form">
        <section className="amount-span">
          <h1>
            <Text tid="convert" />
          </h1>
          <input
            id="amount"
            label="Amount"
            type="number"
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
            {fromUnits.map(({ value, unitId, conversion }) => (
              <option key={value} value={conversion}>
                {/* {label} */}
                {dictionary[unitId]}
                {/* {Text tid={unitId} } */}

             </option>
            ))}
          </select>

          <section>
            <h2>            
              <Text tid="to" />
            </h2>
          </section>

          <select
            className="select-to"
            value={toUnit}
            onChange={event => setToUnit(event.target.value)}
          >
            {toUnits.map(({ value, unitId, conversion }) => (
              <option key={value} value={conversion}>
                {dictionary[unitId]}
              </option>
            ))}
          </select>
        </section>
        <section className="conversion-section">
            <div>

            <h2><Text tid="converted" /></h2>
            </div>
          <div className="converted-val">
            {Number.isInteger(convertedVal)
              ? convertedVal
              : convertedVal.toFixed(2)}
          </div>
        </section>
      </main>
    );
};


export default UnitSelect;
