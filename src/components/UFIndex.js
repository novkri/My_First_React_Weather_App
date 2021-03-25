import React from 'react'

const UFIndex = ({ UF }) => {
  const roundedUF = Math.round(UF)
  const computeUFIndex = () => {
    let level
    switch (roundedUF) {
      case 0:
      case 1:
      case 2:
        level = "низкий"
        break;
      case 3:
      case 4:
      case 5:
        level = "средний"
        break;
      case 6:
      case 7:
        level = "высокий"
        break;
      case 8:
      case 9:
      case 10:
        level = "очень высокий"
        break;
      default:
        level = "экстремальный"
        break;
    }
    return level
  }
  return ( 
    <>
      УФ-индекс: <strong>{roundedUF}, {computeUFIndex()}</strong>
    </>
  );
}
 
export default UFIndex;