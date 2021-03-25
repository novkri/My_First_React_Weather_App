import './App.css'
import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import ChoosenWeather from './components/ChoosenWeather'

// в хуке вилл маунт сделать?
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
  const [oneDayForecast, setOneDayForecast] = useState({})
  const [clickedCard, setClickedCard] = useState('')

  const lat = localStorage.getItem("USER_LATITUDE")
  const lon = localStorage.getItem("USER_LONGITUDE")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&exclude=minutely&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setTimezone(data.timezone)
        setForecast(data.daily)
      })
  }, [lat, lon])

  const showDetails = (e) => {
    const pickedDayForecast = forecast.filter(f => f.dt === e)
    setOneDayForecast(pickedDayForecast)
    setClickedCard(e)
  }

  return (
    <div className="App">
      <h2 className="timezone">{timezone}</h2>
      <WeatherCard forecast={forecast} onClickCard={showDetails} currentClickedCard={clickedCard} />
      { clickedCard &&  <ChoosenWeather day={oneDayForecast} />}
     
    </div>
  );
}

export default App;
