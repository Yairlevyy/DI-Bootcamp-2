import React, { useEffect } from 'react'
import './numbers.css'

function Numbers({data}) {
  return (
    <>
    <h3 className='white'>Last 30 Days</h3>
    <div className='numbers_container'>
      <div className='stats_container'>
        <h4>Lowest Close</h4>
        <p className='red'>{data.lowest_close}$</p>
      </div>
      <div className='stats_container'>
        <h4>Highest Close</h4>
        <p className='green'>{data.highest_close}$</p>
      </div>
      <div className='stats_container'>
        <h4>Average Close</h4>
        <p className='orange'>{data.average_close}$</p>
      </div>
      <div className='stats_container'>
        <h4>Lowest Vol.</h4>
        <p className='red'>{data.lowest_volatility}$</p>
      </div>
      <div className='stats_container'>
        <h4>Highest Vol.</h4>
        <p className='green'>{data.highest_volatility}$</p>
      </div>
      <div className='stats_container'>
        <h4>Average Vol.</h4>
        <p className='orange'>{data.average_volatility}$</p>
      </div>
    </div>
    </>
  )
}

export default Numbers