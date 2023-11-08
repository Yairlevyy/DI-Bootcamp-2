import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App'

function Button() {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  )
}

export default Button