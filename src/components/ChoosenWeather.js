import React from 'react'
import './WeatherCard.css'
import DateDisplay from './DateDisplay'
import RoundTemp from './RoundTemp'
import TableCreator from './TableCreator'
import UFIndex from './UFIndex'
import { GiSunset, GiSunrise } from "react-icons/gi"
import { IoReturnUpBackOutline } from "react-icons/io5"
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom"
import ReactTooltip from 'react-tooltip'

const ChoosenWeather = ({ day }) => {
  const dayForecast = day[0]

  const renderChoosenBody = () => {
    if (!day || !day.length) return (
      <div className="error-container weather-card">
        <p>Что-то пошло не так :(</p>
      </div>
    )
    return (
      <>
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

        <div className="picked-info">
            <table className="weather-table">
              <TableCreator
                name='Температура'
                data={dayForecast.temp}
              />
            </table>
            
            <table className="weather-table">
              <TableCreator
              name='Ощущается как'
              data={dayForecast.feels_like}
            />
            </table> 

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
      { renderChoosenBody() }   
    </div>
   );
}

ChoosenWeather.propTypes = {
  day: PropTypes.arrayOf(PropTypes.object)
}
export default ChoosenWeather;