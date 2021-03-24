import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ forecast, onClick }) => {
  return (
    forecast.map(f => (
      <div key={f.dt} className="weather-card" onClick={() => onClick(f.dt)}>
        <h3 className="weather-date">{new Date(f.dt * 1000).toLocaleDateString('ru-RU')}</h3>
        <h5 className="weather-weekdate">{new Date(f.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'long'})}</h5>
        <img src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt={f.weather[0].main} />
        <p className="weather-temp"><strong>Днем: {Math.round(f.temp.day)} &deg;C </strong> Ночью: {Math.round(f.temp.night)}&deg;C</p>
      </div>
    ))
  )
}
 
export default WeatherCard;