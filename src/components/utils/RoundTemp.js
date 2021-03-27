import React from 'react';
import PropTypes from 'prop-types'

const RoundTemp = ({ temp, unit = 'c'}) => {
  return ( 
    <>
      {Math.round(temp)} &deg;{unit.toUpperCase()}
    </>
    );
}

RoundTemp.propTypes = {
  temp: PropTypes.number.isRequired,
  unit: PropTypes.string
}

export default RoundTemp;