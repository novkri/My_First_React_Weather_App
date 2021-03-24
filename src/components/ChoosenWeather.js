import React from 'react'
import './WeatherCard.css'
import DateDisplay from './DateDisplay'
import RoundTemp from './RoundTemp'

const ChoosenWeather = ({ day }) => {
  console.log(day);
  return ( 
    <div className="picked-container clicked">
      <div className="picked-header">
        <h3 className="weather-date">
          <DateDisplay UTCDate={day.dt} checkIfToday={true} />
        </h3>
        <p>{day.weather[0].description}</p>
        <p>max: <RoundTemp temp={day.temp.max} />, min: <RoundTemp temp={day.temp.min} /> </p>
      </div>

      <div className="picked-info">
        <div className="weather-table">
          <div className="actual-weather weather-col">
            <p><strong>Температура</strong></p>
            <p><strong>Утром: </strong> <RoundTemp temp={day.temp.morn} /></p>
            <p><strong>Днем: </strong> <RoundTemp temp={day.temp.day} /></p>
            <p><strong>Вечером: </strong> <RoundTemp temp={day.temp.eve} /></p>
            <p><strong>Ночью: </strong> <RoundTemp temp={day.temp.night} /></p>
          </div>
          <div className="feels-like weather-col">
            <p><strong>Ощущается как</strong></p>
            <p><strong>Утром: </strong> <RoundTemp temp={day.feels_like.morn} /></p>
            <p><strong>Днем: </strong> <RoundTemp temp={day.feels_like.day} /></p>
            <p><strong>Вечером: </strong> <RoundTemp temp={day.feels_like.eve} /></p>
            <p><strong>Ночью: </strong> <RoundTemp temp={day.feels_like.night} /></p>
          </div>
        </div>

        <div className="weather-table">
          <div>
            <p>Влажность: {day.humidity} % ?</p>
            <p>Вероятность выпадения осадков: {day.pop}</p>
            <p>Восход:  <DateDisplay isDay={false} UTCDate={day.sunrise} options={{hour: 'numeric', minute: '2-digit'}} /></p>
            <p>Закат:  <DateDisplay isDay={false} UTCDate={day.sunset} options={{hour: 'numeric', minute: '2-digit'}} /></p>
            <p>УФ-индекс: {day.uvi} (округлить, низкий?)</p>
            <p>Ветер:  {day.wind_speed}(в м/с)  {day.wind_deg}(направление)</p>
          </div>

        </div>
      </div>

    </div>
   );
}
 
export default ChoosenWeather;