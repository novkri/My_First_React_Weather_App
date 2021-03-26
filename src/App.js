import './App.css'
import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import ChoosenWeather from './components/ChoosenWeather'
import Loader from './components/Loader'


function App() {
  const [forecast, setForecast] = useState([])
  const [timezone, setTimezone] = useState('')
  const [oneDayForecast, setOneDayForecast] = useState([])
  const [clickedCard, setClickedCard] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const lat = localStorage.getItem("USER_LATITUDE")
  const lon = localStorage.getItem("USER_LONGITUDE")

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
    function success(position) {
      localStorage.setItem("USER_LATITUDE", position.coords.latitude);
      localStorage.setItem("USER_LONGITUDE", position.coords.longitude);
    }

    const fetchForecast = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&exclude=minutely&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(data => {
        setTimezone(data.timezone)
        setForecast(data.daily)
        })
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchForecast()
  }, [lat, lon])

  const showDetails = (e) => {
    if (clickedCard === e) {
      setClickedCard(null)
    } else {
      const pickedDayForecast = forecast.filter(f => f.dt === e)
      setOneDayForecast(pickedDayForecast)
      setClickedCard(e)
    }
    
  }

  const closeCurrentCard = () => {
    setClickedCard(null)
  }

  return (
    <div className="App">
      {isError && <div>ЧТо-то пошло не так...</div>}

      { isLoading ? 
        <Loader /> : (
          <>
            <h2 className="timezone">{timezone}</h2>
            <WeatherCard forecast={forecast} onClickCard={showDetails} currentClickedCard={clickedCard} />
            { clickedCard &&  <ChoosenWeather day={oneDayForecast} onClick={closeCurrentCard} />}
          </>
        )
      }
    </div>
  );
}

export default App;
