import { useState, useEffect } from "react";

const api_key = 'Lg4xcOdzzxJKjyfGKNrQA2rXpR0eVCRy';

function Favorites() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
    setCities(storedCities);
  }, []);

  useEffect(() => {
    // Create an array of promises from fetch operations
    const fetchDataPromises = cities.map((item) =>
      fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${item.cityKey}?apikey=${api_key}`)
        .then(res => res.json())
        .then(data => data.DailyForecasts[0])
    );

    // Wait for all promises to resolve
    Promise.all(fetchDataPromises)
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, [cities]); // Trigger the effect when the cities array changes

  return (
    <div>
      {data.map((dailyData, index) => (
        <div key={index}>
          <p>{cities[index].cityCapital}</p>
          <p>Min: {Math.round((Number(dailyData.Temperature.Minimum.Value) - 32) / 1.8)}°C</p>
          <p>Max: {Math.round((Number(dailyData.Temperature.Maximum.Value) - 32) / 1.8)}°C</p>
          <p>{dailyData.Day.IconPhrase}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
