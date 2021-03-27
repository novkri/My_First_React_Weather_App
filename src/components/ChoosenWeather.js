import React from 'react'
import { Link } from "react-router-dom"
import './WeatherCard.css'
import DateDisplay from './utils/DateDisplay'
import RoundTemp from './utils/RoundTemp'
import TableCreator from './utils/TableCreator'
import UFIndex from './utils/UFIndex'
import { GiSunset, GiSunrise } from "react-icons/gi"
import { IoReturnUpBackOutline } from "react-icons/io5"
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

const foo2 = () => {
  return JSON.parse(localStorage.getItem("ONE_DAY_FORECAST"))[0]
}

const ChoosenWeather = ({ day }) => {
  const dayForecast = day.length > 0 ? day[0] : foo2()

  const renderChoosenBody = () => {
    if (!dayForecast) return (
      <div className="error-container">
        <p>Что-то пошло не так :(</p>
      </div>
    )
    return (
      <>
        <div className="picked-info">
          <TableCreator
            name='Температура'
            data={dayForecast.temp}
          />

          <TableCreator
            name='Ощущается как'
            data={dayForecast.feels_like}
          />
  
          <div className="weather-table">
            <div className="weather-sun">
              <GiSunset size="2rem" />
              <p>
                <strong>Восход: </strong> 
                <DateDisplay
                  isDay={false}
                  UTCDate={dayForecast.sunrise}
                  options={{hour: 'numeric', minute: '2-digit'}}
                />
              </p>
            </div>
            <div className="weather-sun">
              <GiSunrise size="2rem" />
              <p>
                <strong>Закат: </strong> 
                <DateDisplay
                  isDay={false}
                  UTCDate={dayForecast.sunset}
                  options={{hour: 'numeric', minute: '2-digit'}}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="picked-footer">
          <p>Влажность: <strong>{dayForecast.humidity}%</strong></p>
          <p><UFIndex UF={dayForecast.uvi}/></p>
          <p>Ветер: <strong>{dayForecast.wind_speed}м/с</strong></p>
        </div>
      </>
    )
  }

  return ( 
    <div className="picked-container glass">
      <div className="picked-header">
        <Link to="/">
          <button
            data-tip
            data-for="returnBtn"
            className="btn picked-close"
          >
            <IoReturnUpBackOutline size="1.8rem" />
          </button>

          <ReactTooltip
            id="returnBtn"
            place="top"
            type="dark"
            effect="solid"
          >
            Назад
          </ReactTooltip>
        </Link>

        <h3 className="weather-date">
          <DateDisplay
            UTCDate={dayForecast.dt}
            checkIfToday={true}
          />
        </h3>
        </div>

      <div className="picked-header sub-header">
        <p>{dayForecast.weather[0].description}</p>
        <p>max: <RoundTemp temp={dayForecast.temp.max} /></p>
        <p>min: <RoundTemp temp={dayForecast.temp.min} /></p>
      </div>

      { renderChoosenBody() }   
    </div>
   );
}

ChoosenWeather.propTypes = {
  day: PropTypes.arrayOf(PropTypes.object)
}

export default ChoosenWeather;