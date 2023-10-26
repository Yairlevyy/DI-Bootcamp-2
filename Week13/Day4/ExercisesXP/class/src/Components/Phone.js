import {useState} from 'react'

function Phone() {

const [brand,setBrand] = useState('Samsung');
const [model,setModel] = useState('Galaxy S20');
const [color,setColor] = useState('black');
const [year,setYear] = useState(2020);

    return (
    <>
        <h1>My phone is a {brand}</h1>
        <p>It is a {color} {model} from {year}</p>
    </>
  )
};

export default Phone;