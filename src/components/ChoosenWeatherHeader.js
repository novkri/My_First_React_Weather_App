import React from 'react'
import { Link } from "react-router-dom"
import './WeatherCard.css'
import DateDisplay from './utils/DateDisplay'
import RoundTemp from './utils/RoundTemp'
import { IoReturnUpBackOutline } from "react-icons/io5"
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

const ChoosenWeatherHeader = ({ dayForecast }) => {
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
    </>
   );
}

ChoosenWeatherHeader.propTypes = {
  dayForecast: PropTypes.object
}
export default ChoosenWeatherHeader;