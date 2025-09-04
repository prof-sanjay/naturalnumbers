import React, { useState } from "react";
import "./index.css";

function NaturalNumbers() {
  const [num, setNum] = useState("");   // input number
  const [numbers, setNumbers] = useState([]); // list of natural numbers

  // Function to generate natural numbers up to num
  function nat() {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    setNumbers(arr);
  }

  return (
    <div className="box">
      <h3>Natural Numbers</h3>
      <label htmlFor="nmb">Number: </label>
      <input
        id="nmb"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button className="btn" onClick={nat}>
        Execute
      </button>

      <div>
        {numbers.map((number, index) => (
          <h1 key={index}>{number}</h1>
        ))}
      </div>
    </div>
  );
}

export default NaturalNumbers;
