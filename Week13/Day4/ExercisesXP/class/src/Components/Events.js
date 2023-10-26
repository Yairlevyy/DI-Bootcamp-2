import { useState } from "react"

function Events() {

  const [isToggleOn,setToggle] = useState(true);
  
  const clickMe = () => {
    alert('I was clicked')
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        alert(e.target.value)
    }
  };

  const changeToggle = () => {
    if (isToggleOn) {
        setToggle(false)
    } else {
        setToggle(true)
    }
  };

  return (
    <>
    <button onClick={clickMe}>click me</button>
    <input type="text" onKeyDown={handleKeyDown}/>
    <button onClick={changeToggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  )
}

export default Events