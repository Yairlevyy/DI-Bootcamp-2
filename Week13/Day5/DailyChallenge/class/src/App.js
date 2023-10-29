import React, { useState } from 'react';
import './App.css';

function App() {

  const [numOne,setNumOne] = useState(0)
  const [numTwo,setNumTwo] = useState(0)
  const [total,setTotal] = useState(0)

  const addThem = () => {
    setTotal(parseInt(numOne)+parseInt(numTwo))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adding Two Numbers</h1>

        <input type="number" onChange={(e)=>setNumOne(e.target.value)}/>
        <input type="number" onChange={(e)=>setNumTwo(e.target.value)}/>
        <button onClick={addThem}>Add Them!</button>
        <h1>{total}</h1>
      </header>
    </div>
  );
}

export default App;
