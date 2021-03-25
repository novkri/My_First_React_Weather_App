import React from 'react';

const RoundTemp = ({ temp, unit = 'c'}) => {
  return ( 
    <>
      {Math.round(temp)} &deg;{unit.toUpperCase()}
    </>
    );
}
 
export default RoundTemp;