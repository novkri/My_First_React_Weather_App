import './App.css'
import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import ChoosenWeather from './components/ChoosenWeather'

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
  function success(position) {
    localStorage.setItem("USER_LATITUDE", position.coords.latitude);
    localStorage.setItem("USER_LONGITUDE", position.coords.longitude);
  }

function App() {
  const [forecast, setForecast] = useState({})
  const [timezone, setTimezone] = useState('')
  const [oneDay, setOneDay] = useState([])
  const lat = localStorage.getItem("USER_LATITUDE")
  const lon = localStorage.getItem("USER_LONGITUDE")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&exclude=minutely&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setTimezone(data.timezone)
        setForecast(data.daily)
      })
  }, [])

  const showDetails = (e) => {
    const pickedForecast = forecast.filter(f => f.dt === e)
    setOneDay(pickedForecast)
  }

  return (
    <div className="App">
      <h2 className="timezone">{timezone}</h2>
      <div className="weather-container">
        {forecast.length > 0 && <WeatherCard forecast={forecast} onClick={showDetails} />}
      </div>
      <div className="picked-weather">
        { oneDay.length > 0 && <ChoosenWeather day={oneDay[0]} />}
      </div>
    </div>
  );
}

export default App;
