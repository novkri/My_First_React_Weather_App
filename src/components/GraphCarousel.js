import React, { useState } from 'react'
import Graph from './Graph'
import './Graphs.css'
import PropTypes from 'prop-types'

const graphsVariant = ['Morning', 'Day', 'Evening', 'Night', 'Max', 'Min']

const GraphCarousel = ({ tempGraph }) => {
  const [dayToShow, setDayToShow] = useState('Day')

  const goToNextGraph = () => {
    const thisIndex = graphsVariant.indexOf(dayToShow)

    const f = graphsVariant.filter((v, i) => {
      if (thisIndex === graphsVariant.length-1) {return -1}

      if (i === thisIndex+1) {
        return v
      }
    })

    setDayToShow(f[0])
  }

  // !!!!! не работает
  const goToPrevGraph = () => {
    const thisIndex = graphsVariant.indexOf(dayToShow)

    const f = graphsVariant.filter((v, i) => {
     
      if (thisIndex === -1) {return graphsVariant.length}
      // console.log(v, i, thisIndex);
      if (i === thisIndex-1) {
        // console.log(v, i, thisIndex);
        return v
      }
    })

    setDayToShow(f[0])
  }


  return ( 
    <div className="graph-carousel">
      <div className="graph-header">
        {/* поправить заголовок */}
        <h6 className="graph-title">{dayToShow}</h6>

        <div>
          <button onClick={goToPrevGraph}>&lt;</button>
          <button onClick={goToNextGraph}>&gt;</button>
        </div>
        
      </div>
      
      {tempGraph.length > 0 && <Graph tempGraph={tempGraph} toShow={dayToShow} /> }
    </div>
    );
}


GraphCarousel.propTypes = {
  tempGraph: PropTypes.arrayOf(PropTypes.object),
}
export default GraphCarousel;