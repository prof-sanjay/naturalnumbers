import React from 'react';

function NaturalNumbers() {
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <h2>Natural Numbers:</h2>
        {numbers.map((number) => (
         <h1>{number}</h1>
        ))}
    </div>
  );
}

export default NaturalNumbers