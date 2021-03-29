import React from 'react'
import './WeatherCard.css'
import DateDisplay from './utils/DateDisplay'
import TableCreator from './utils/TableCreator'
import UFIndex from './utils/UFIndex'
import {GiSunset, GiSunrise} from "react-icons/gi"
import PropTypes from 'prop-types'
import ChoosenWeatherHeader from './ChoosenWeatherHeader'

const getForecastFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("ONE_DAY_FORECAST"))[0]
}

const ChoosenWeather = ({day}) => {
  const dayForecast = day.length > 0
    ? day[0]
    : getForecastFromLocalStorage()

  return (
    <div className="picked-container glass">
      {
        dayForecast ?
          <div>
            <ChoosenWeatherHeader dayForecast={dayForecast} /> 

            <div className="picked-info">
              <TableCreator name='Температура' data={dayForecast.temp}/>

              <TableCreator name='Ощущается как' data={dayForecast.feels_like}/>

              <div className="weather-table">
                <div className="weather-sun">
                  <GiSunset size="2rem"/>
                  <p>
                    <strong>Восход: &nbsp;
                    </strong>
                    <DateDisplay
                      isDay={false}
                      UTCDate={dayForecast.sunrise}
                      options={{
                      hour: 'numeric',
                      minute: '2-digit'
                    }}/>
                  </p>
                </div>
                <div className="weather-sun">
                  <GiSunrise size="2rem"/>
                  <p>
                    <strong>Закат: &nbsp;
                    </strong>
                    <DateDisplay
                      isDay={false}
                      UTCDate={dayForecast.sunset}
                      options={{
                      hour: 'numeric',
                      minute: '2-digit'
                    }}/>
                  </p>
                </div>
              </div>
            </div>

            <div className="picked-footer">
              <p>Влажность:
                <strong>{dayForecast.humidity}%</strong>
              </p>
              <p><UFIndex UF={dayForecast.uvi}/></p>
              <p>Ветер:
                <strong>{dayForecast.wind_speed}м/с</strong>
              </p>
            </div>
          </div> :
          <div className="error-container">
            <p>Что-то пошло не так :(</p>
          </div>
      }
    </div>
  );
}

ChoosenWeather.propTypes = {
  day: PropTypes.arrayOf(PropTypes.object)
}

export default ChoosenWeather;