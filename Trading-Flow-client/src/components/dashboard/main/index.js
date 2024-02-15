import React, { useEffect, useState } from 'react'
import data_chart from "../../../data/chart.js"
import './main.css'
import Chart from './chart'
import Numbers from './numbers'

function Main({ticker}) {
  const [data,setData] = useState(data_chart[0])
  const fetchData = async () => {
      try {
        const response = await fetch(`https://server-trading-flow.onrender.com/get-ticker-data/${ticker.company_ticker}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(()=>{
    fetchData()
    console.log(data)
  },[ticker]);

  return (
    <div className='main_container'>
        <div className='charts_container'>
          <div className='ticker_infos'>
            <img src={ticker.company_logo}/>
            <h3>{ticker.company_name}</h3>
          </div>
          <Chart ticker={ticker.company_ticker} data={data.data}/>
        </div>
        <div className='data_container'>
          <Numbers data={data}/>
        </div>
    </div>
  )
}

export default Main