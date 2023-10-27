import React, { useState } from 'react'
import quotes from './quotes.js'
import './Random.css'

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "teal",
  "brown",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "indigo",
  "violet"
];

function Random() {
    const [quote,setQuote] = useState(quotes[0]);
    const [color,setColor] = useState('black');

    const updateQuoteAndColor = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        const randomIndexColor = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndexColor])
    }


    return (
    <div className='container' style={{backgroundColor:color}}>
    <div className='sub_container'>
        <h1 style={{color:color}}>{quote.quote}</h1>
        <p style={{color:color}}>{quote.author}</p>
        <button onClick={updateQuoteAndColor} style={{border:'none',margin:'10px',padding:'10px',color:'white',backgroundColor:color}}>New Quote</button>
    </div>
    </div>
  )
}

export default Random