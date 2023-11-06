import React from 'react'
import '../App.css'

function Card({id,img,name,clicked,occupation,handleClick}) {
  return (
    <div className='card_container' onClick={()=>handleClick(clicked,id)}>
        <img src={img} height='150px' width='150px'/>
        <p>Name: {name}</p>
        <p>Occupation: {occupation}</p>
    </div>
  )
}

export default Card