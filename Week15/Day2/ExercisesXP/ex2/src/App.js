import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef()
  const [counter,setCounter] = useState(0)

  function handleChange(){
    const len = inputRef.current.value.length;
    setCounter(len)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' ref={inputRef} onChange={handleChange}/>
        <h3>Character Count: {counter}</h3>
      </header>
    </div>
  );
}

export default App;
