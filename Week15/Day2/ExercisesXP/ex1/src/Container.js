import React, { useContext } from 'react';
import { ThemeContext } from './App';
import Button from './Button';

function Container() {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        height: '100vh',
        margin: '0',
        padding: '10px'
        }}>
        <h1>The actual theme is : {theme}</h1>
        <Button />
    </div>
  )
}

export default Container