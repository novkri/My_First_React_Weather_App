import React from 'react'
import PropTypes from 'prop-types'

const TranslateHeader = ({ header }) => {
  const generateBody = () => {
    let title
    switch (header) {
      case 'Day':
        title = 'днем'
        break;
      case 'Morning':
        title = 'утром'
        break;
      case 'Evening':
        title = 'вечером'
        break;
      case 'Night':
        title = 'ночью'
        break;
      case 'Min':
        title = '(минимальная)'
        break;
      case 'Max':
        title = '(максимальная)'
        break; 
      default:
        title = ''
        break;
    }
    return title
  }

  return ( 
    <h6 className="graph-title">
      Прогноз температуры { generateBody() }
    </h6>
   );
}


TranslateHeader.propTypes = {
  header: PropTypes.string.isRequired,
}

export default TranslateHeader;