import './App.css'
import React, { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import WeatherCard from './components/WeatherCard'
import ChoosenWeather from './components/ChoosenWeather'
import Loader from './components/Loader'
import Graph from './components/Graph'


function App() {
  const [forecast, setForecast] = useState([])
  const [timezone, setTimezone] = useState('')
  const [oneDayForecast, setOneDayForecast] = useState([])
  const [clickedCard, setClickedCard] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [tempGraph, setTempGraph] = useState({});

  const lat = localStorage.getItem("USER_LATITUDE")
  const lon = localStorage.getItem("USER_LONGITUDE")

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
    function success(position) {
      localStorage.setItem("USER_LATITUDE", position.coords.latitude)
      localStorage.setItem("USER_LONGITUDE", position.coords.longitude)
    }

    const fetchForecast = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&exclude=minutely&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(data => {
        setTimezone(data.timezone)

        if (clickedCard) {
          localStorage.setItem("ONE_DAY_FORECAST", JSON.stringify(data.daily.filter(day => day.dt === clickedCard)));
          setOneDayForecast(data.daily.filter(day => day.dt === clickedCard))
        }
        setForecast(data.daily.slice(0, 7))
        
        let customArr = [];
        data.daily.slice(0, 7).map((r, i) => {
          let customObject = {
            day: new Date(r.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'long' }),
            Day: r.temp.day,
            Night: r.temp.night,
            Morning: r.temp.morn,
            Evening: r.temp.eve,
            Max: r.temp.max,
            Min: r.temp.min,
            // Day: Math.round(r.temp.day),
            // Night: Math.round(r.temp.night),
            // Morning: Math.round(r.temp.morn),
            // Evening: Math.round(r.temp.eve),
            // Max: Math.round(r.temp.max),
            // Min: Math.round(r.temp.min),
        }
        customArr.push(customObject);
        })

        setTempGraph(customArr)
        })
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchForecast()
  }, [lat, lon, clickedCard ])


  const showDetails = (e) => {
    const pickedDayForecast = forecast.filter(f => f.dt === e)
    setOneDayForecast(pickedDayForecast)
    setClickedCard(e)    
  }

  return (
    <Router>
      <Switch>
        <Route path="/:nameOfTheDay">
          <ChoosenWeather day={oneDayForecast} />
        </Route>
        
        <Route path="/">
        <div className="App">
          { isLoading ? 
            <Loader /> : (
              isError ? <div className="load-error">Что-то пошло не так :C</div> :
              <>
                <h2 className="timezone">{timezone}</h2>
                <WeatherCard
                  forecast={forecast}
                  onClickCard={showDetails}
                />
                (мб тут батон для графиокв)
                {tempGraph.length > 0 && <Graph tempGraph={tempGraph} toShow={'Max'} /> }
              </>
            )
          }
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
