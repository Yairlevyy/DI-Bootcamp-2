import React, { useEffect, useState } from 'react'
import './right.css'

function Right({ticker}) {
  const [data,setData] = useState(null)

  function formatNumber(number) {
    if (number >= 1000000000000) {
        return `$${(number / 1000000000000).toFixed(2)} Trillion`;
    } else if (number >= 1000000000) {
        return `$${(number / 1000000000).toFixed(2)} Billion`;
    } else if (number >= 1000000) {
        return `$${(number / 1000000).toFixed(2)} Million`;
    } else {
        return `$${number}`;
    }
  }

  useEffect(()=>{
    fetch(`https://api.polygon.io/v3/reference/tickers/${ticker.company_ticker}?apiKey=ivZzORZgwRUh111oi0qOsGj4pKbiSoYG`)
    .then(res=>res.json())
    .then(data=>setData(data.results))
    .catch(e=>console.log(e))
  }, [ticker])

  return (
    <div className='right_container'>
        <div className='ticker_infos_container'>
          <div className='profile_infos'>
            <img src={ticker.company_logo} />
            <p>{ticker.company_name}</p>
            <p className='ticker_infos'>{ticker.company_ticker}</p>
          </div>
          {data && 
          <>
          <div className='ticker_infos_sub_container'>
            <h4>Market Capitalization</h4>
            <p style={{textAlign:'center'}}>{formatNumber(data.market_cap)}</p>
          </div>
          <div className='ticker_infos_sub_container'>
            <h4>About</h4>
            <p style={{textAlign:'justify'}}>{data.description}</p>
          </div>
          <div className='ticker_infos_sub_container'>
            <h4>Website</h4>
            <a href={data.homepage_url} target="_blank">Visit the company website</a>
          </div>
          </>
          }
        </div>
    </div>
  )
}

export default Right