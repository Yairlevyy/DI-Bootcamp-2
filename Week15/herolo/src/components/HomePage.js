import React, {useState} from 'react'
import ForecastIcon from './ForecastIcon'

function HomePage() {
  const [search,setSearch] = useState('')
  const [city,setCity] = useState('')
  return (
    <div className='home_page'>
      <div className='search_bar'>
        <input placeholder='Tel Aviv...' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>setCity(search)}>Search</button>
      </div>
      <ForecastIcon city={city} />
    </div>
  )
}

export default HomePage