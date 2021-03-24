import React from 'react'
import './WeatherCard.css'

const ChoosenWeather = ({ day }) => {
  console.log(day);
  return ( 
    <>
    температуру округлить
      <h3 className="weather-date">{new Date(day.dt * 1000).toLocaleDateString('ru-RU')}</h3>
      <p>max: {day.temp.max}, min: {day.temp.min}</p>
      <div className="weather-table">
        <div className="actual-weather weather-col">
          <p><strong>Температура</strong></p>
          <p><strong>Утром: </strong> {day.temp.morn}</p>
          <p><strong>Днем: </strong> {day.temp.day}</p>
          <p><strong>Вечером: </strong> {day.temp.eve}</p>
          <p><strong>Ночью: </strong> {day.temp.night}</p>
        </div>
        <div className="feels-like weather-col">
          <p><strong>Ощущается как</strong></p>
          <p><strong>Утром: </strong> {day.feels_like.morn}</p>
          <p><strong>Днем: </strong> {day.feels_like.day}</p>
          <p><strong>Вечером: </strong> {day.feels_like.eve}</p>
          <p><strong>Ночью: </strong> {day.feels_like.night}</p>
        </div>
      </div>
      {/*
      <div>
        humidity: {day.humidity}
        pop: {day.pop}
        pressure: {day.pressure}
        snow: {day.snow}
        sunrise: {new Date(day.sunrise * 1000).toLocaleTimeString('ru-RU')}
        sunset: {new Date(day.sunset * 1000).toLocaleTimeString('ru-RU')}
      </div>

      <div>
      uvi: {day.uvi}
      wind_deg: {day.wind_deg}
wind_speed: {day.wind_speed}


      weather: 
description: {day.weather[0].description}
icon: "13d"
      </div> */}
    </>
   );
}
 
export default ChoosenWeather;