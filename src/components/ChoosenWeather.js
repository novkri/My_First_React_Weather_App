import React from 'react'

const ChoosenWeather = ({ day }) => {
  console.log(day);
  return ( 
    <>
      <h3 className="weather-date">{new Date(day.dt * 1000).toLocaleDateString('ru-RU')}</h3>
      <div>
      feels_like:
        day: {day.feels_like.day}
        eve: {day.feels_like.eve}
        morn: {day.feels_like.morn}
        night: {day.feels_like.night}
      </div>
      <div>
        humidity: {day.humidity}
        pop: {day.pop}
        pressure: {day.pressure}
        snow: {day.snow}
        sunrise: {new Date(day.sunrise * 1000).toLocaleTimeString('ru-RU')}
        sunset: {new Date(day.sunset * 1000).toLocaleTimeString('ru-RU')}
      </div>
      <div>
      temp:
        day: {day.temp.day}
        eve: {day.temp.eve}
        max: {day.temp.max}
        min: {day.temp.min}
        morn: {day.temp.morn}
        night: {day.temp.night}
      </div>
      <div>
      uvi: {day.uvi}
      wind_deg: {day.wind_deg}
wind_speed: {day.wind_speed}


      weather: 
description: "снег" {day.weather[0].description}
icon: "13d"
      </div>
    </>
   );
}
 
export default ChoosenWeather;