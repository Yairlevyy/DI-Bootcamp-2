import React, { useState } from 'react'

function BuggyCounter() {

  const [counter,setCounter] = useState(0)

  if (counter == 5) {
    throw new Error("‘I crashed!");
  }
    
  const handleClick = () => {
      setCounter(counter+1)
  };

  return (
    <>
      <p>Count : {counter}</p>
      <button onClick={handleClick}>Plus</button>
    </>
  )
}

export default BuggyCounter