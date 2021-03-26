import React from 'react'
import './WeatherCard.css'
import DateDisplay from './DateDisplay'
import RoundTemp from './RoundTemp'
import PropTypes from 'prop-types'

const WeatherCard = ({ forecast, onClickCard, currentClickedCard }) => {

  const renderCardBody = () => {
    if (!forecast || !forecast.length) return (
      <div className="error-container weather-card">
        <p>Не получилось загрузить прогноз погоды с сервера :(</p>
        <p>Попробуйте позднее</p>
      </div>
    )

    return (
      forecast.map(f => (
        <div key={f.dt} className={currentClickedCard === f.dt ? 'weather-card clicked' : 'weather-card'} onClick={() => onClickCard(f.dt)}>
          <h5 className="weather-weekdate">
            <DateDisplay UTCDate={f.dt} options={{ weekday: 'long'}} checkIfToday={true} />
          </h5>

          <h3 className="weather-date">
            <DateDisplay UTCDate={f.dt} />
          </h3>
          
          <img src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt={f.weather[0].main} />

          <p className="weather-temp">
            <strong>
              Днем: <RoundTemp temp={f.temp.day} />
            </strong> 
          </p>
          <p className="weather-temp">
            Ночью: <RoundTemp temp={f.temp.night} />
          </p>
        </div>
      ))
    )
  }

  
  return (
    <div className="weather-container">
      {
        renderCardBody()
      }
    </div>
  )
}

WeatherCard.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object),
  onClickCard: PropTypes.func,
  currentClickedCard: PropTypes.number
}
export default WeatherCard;