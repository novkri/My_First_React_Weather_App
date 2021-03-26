import React from 'react'
import './WeatherCard.css'
import DateDisplay from './DateDisplay'
import RoundTemp from './RoundTemp'
import {
  Link
} from "react-router-dom";

import PropTypes from 'prop-types'

const WeatherCard = ({ forecast, onClickCard, currentClickedCard }) => {

  return (
    <div className="weather-container">
      {
        forecast.map(f => (
          <Link
            to={new Date(f.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'long' })}
            key={f.dt}
          >
            <div
              className='weather-card glass'
              onClick={() => onClickCard(f.dt)}
            >
              <h5 className="weather-weekdate">
                <DateDisplay
                  UTCDate={f.dt}
                  options={{ weekday: 'long'}}
                  checkIfToday={true}
                />
              </h5>
  
              <h3 className="weather-date">
                <DateDisplay UTCDate={f.dt} />
              </h3>
              
              <img
                src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                alt={f.weather[0].main}
              />
  
              <p className="weather-temp">
                <strong>
                  Днем: <RoundTemp temp={f.temp.day} />
                </strong> 
              </p>
              <p className="weather-temp">
                Ночью: <RoundTemp temp={f.temp.night} />
              </p>
            </div>

          </Link>
        ))
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