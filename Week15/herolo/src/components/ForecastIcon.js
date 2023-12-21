import React, {useState,useEffect} from 'react'

const api_key = 'Lg4xcOdzzxJKjyfGKNrQA2rXpR0eVCRy'

function ForecastIcon({city}) {

  const [data,setData] = useState([])
  const [cityKey,setCityKey] = useState('')
  const [cityCapital,setCityCapital] = useState('')

  async function getKey(){
    const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city}`)
    const data = await res.json()
    const key = data[0].Key
    setCityKey(key)
    setCityCapital(data[0].LocalizedName)
    // console.log(data[0])
    getData(key)
  }

  async function getData(key){
    const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${api_key}`)
    const data = await res.json()
    console.log(data.DailyForecasts)
    setData(data.DailyForecasts)
  }

  function addCity(cityKey){
    const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
    storedCities.push({cityKey,cityCapital});
    localStorage.setItem('cities', JSON.stringify(storedCities));
  }

  useEffect(()=>{
    city.length > 0 ? getKey() : console.log('waiting...')
  },[city])

  return (
    <div>
        {
        data.length > 0 ?
        <>
        <div>
            <div>
                <p>{cityCapital}</p>
                    <p>Min: {Math.round((Number(data[0].Temperature.Minimum.Value)-32)/1.8)}°C</p>
                    <p>Max: {Math.round((Number(data[0].Temperature.Maximum.Value)-32)/1.8)}°C</p>
            </div>
            <div>
                <button onClick={()=>addCity(cityKey)}>Add to Favorites</button>
            </div>
        </div>
        <h1>{data[0].Day.IconPhrase}</h1>
        </>
        : null
        }
        {
            data.map((item,index)=>{
                const date = new Date(item.Date);
                const options = { weekday: 'long' };
                const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date);

                return(
                    <div key={index} className='day_icon'>
                        <p>{dayOfWeek.substring(0,3)}</p>
                        <p>Min: {Math.round((Number(item.Temperature.Minimum.Value)-32)/1.8)}°C</p>
                        <p>Max: {Math.round((Number(item.Temperature.Maximum.Value)-32)/1.8)}°C</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ForecastIcon