import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ maxWidth: '250px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '100%', padding: '10px', fontSize: '18px', marginBottom: '10px', textAlign: 'right' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((btn) => (
          btn === '=' ?
            <button key={btn} onClick={handleEqual} style={{ padding: '15px', fontSize: '18px' }}>{btn}</button> :
            <button key={btn} onClick={() => handleClick(btn)} style={{ padding: '15px', fontSize: '18px' }}>{btn}</button>
        ))}
        <button onClick={handleClear} style={{ gridColumn: 'span 4', padding: '15px', fontSize: '18px', background: '#f44336', color: 'white' }}>Clear</button>
      </div>
    </div>
  );
}
