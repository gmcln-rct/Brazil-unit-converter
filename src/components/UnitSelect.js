import React, { useContext, useState, useEffect } from "react";

import { LanguageContext, Text } from "../contexts/LanguageContext";


const UnitSelect = () => {
    const { dictionary, setLanguage } = useContext(LanguageContext);
    const { cupbz, setCubBZ } = useContext(LanguageContext);

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
      { label: "Teaspoon (BZ)", value: "tspbz", conversion: 5 },
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
        <section className="amount-span">
          <h2>Enter Amount To Convert</h2>
          {/* <Text tid="cupbz" /> */}

          <input
            id="amount"
            label="Amount"
            // name="tsp-bz"
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
            {fromUnits.map(({ label, value, unitId, conversion }) => (
              <option key={value} value={conversion}>
                {label}
                {/* <Text tid={unitId} /> */}

                {/* <Text tid="value" /> */}
                {/* {Text.tid=unitId} */}
                {/* <Text tid='{value}' /> */}
             </option>
            ))}
          </select>
          <section>

          <h2>to</h2>
          </section>


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
        <section className="conversion-section">
            <div>

          <h2>Converted Amount:</h2>
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
