import './App.css';
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';
import Child from './components/Child';
import { useState } from 'react';

function App() {

  const [show,setShow] = useState(true)
  const deleteChild = () => {
    setShow(false)
  }
  return (
    <div>
        {/* <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary> */}
        {/* <Color /> */}
        {show && <Child/>}
        <button onClick={deleteChild}>Change</button>
    </div>
  )
}

export default App;
