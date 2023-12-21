import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <h1>Herolo Weather Task</h1>
      <div className='navbar_link'>
        <NavLink to='/' activeclassname="active">Home</NavLink>
        <NavLink to='/favorites' activeclassname="active">Favorites</NavLink>
      </div>
    </div>
  )
}

export default NavBar