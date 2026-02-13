import { useState } from 'react'
import Calculator from './Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: '20px' }}>
      <h1>Counter + Calculator</h1>

      <div style={{ marginBottom: '30px' }}>
        <h2>Counter: {count}</h2>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ padding: '10px 20px', fontSize: '18px', marginRight: '10px' }}
        >
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} 
          style={{ padding: '10px 20px', fontSize: '18px' }}
        >
          Decrement
        </button>
      </div>

      <Calculator />
    </div>
  )
}

export default App
