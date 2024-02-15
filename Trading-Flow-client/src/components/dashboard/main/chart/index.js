import React, {useEffect, useState} from 'react'
import './chart.css'
import { createChart } from 'lightweight-charts';

function Chart({data}) {

  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const cleanData = (array) =>{
    const volatilityArray = array.map(item => ({
      time: formatDate(item.t),
      value: item.vw
    }));

    const priceArray = array.map(item => ({
      time: formatDate(item.t),
      open: item.o,
      high: item.h,
      low: item.l,
      close: item.c
    }));

    return [volatilityArray, priceArray]
  };

  const displayChart = (array) => {
    // Clean the previous chart
    const previousChartContainer = document.getElementsByClassName('charts_app')[0];
    while (previousChartContainer.firstChild) {
      previousChartContainer.removeChild(previousChartContainer.firstChild);
    }

    const [volatilityArray, priceArray] = cleanData(array)

    // Create and display the new chart
    const chartOptions = {
      layout: {
        textColor: 'white',
        background: {
          type: 'solid',
          color: 'black'
        }
      }
    };
    const chart = createChart(previousChartContainer, chartOptions);

    const areaSeries = chart.addAreaSeries({
      lineColor: '#2962FF', topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)',
    });
    areaSeries.setData(volatilityArray);

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
      wickUpColor: '#26a69a', wickDownColor: '#ef5350',
    });
    candlestickSeries.setData(priceArray);

    chart.timeScale().fitContent();
  };

  useEffect(() => { 
    console.log("hello=>",data)
    displayChart(data)
  }, [data]);
  return (
    <div className='charts_app'></div>
  )
}

export default Chart