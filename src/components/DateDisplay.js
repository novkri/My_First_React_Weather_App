import React from 'react'

const DateDisplay = ({ UTCDate, isDay = true, options = {}, checkIfToday = false, locale = 'ru-RU' }) => {

const isToday = new Date().toLocaleDateString('ru-RU') === new Date(UTCDate * 1000).toLocaleDateString('ru-RU')

const dateOrTime = () => {
    if (checkIfToday && isToday) {
      return 'Сегодня'
    }
    return isDay ?
      new Date(UTCDate * 1000).toLocaleDateString(locale, options) :
      new Date(UTCDate * 1000).toLocaleTimeString(locale, options)
    }

  return ( 
    <>
      {dateOrTime()}
    </>
   );
}
 
export default DateDisplay;