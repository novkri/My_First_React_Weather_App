import React, { useState } from 'react'
import Graph from './Graph'
import './Graphs.css'
import { MdArrowForward, MdArrowBack } from "react-icons/md"
import PropTypes from 'prop-types'

const graphsVariant = ['Morning', 'Day', 'Evening', 'Night', 'Max', 'Min']

const GraphCarousel = ({ tempGraph }) => {
  const [dayToShow, setDayToShow] = useState('Day')

  const goToNextGraph = () => {
    const thisIndex = graphsVariant.indexOf(dayToShow)

    graphsVariant.filter((v, i) => {
      if (thisIndex === graphsVariant.length-1) {
        setDayToShow(graphsVariant[0])
      }

      if (i === thisIndex+1) {
        setDayToShow(v)
      }
    })
  }

  const goToPrevGraph = () => {
    const thisIndex = graphsVariant.indexOf(dayToShow)

    graphsVariant.filter((v, i) => {
      if (thisIndex === 0) {
        setDayToShow(graphsVariant[graphsVariant.length-1])
      }
      if (i === thisIndex-1) {
        setDayToShow(v)
      }
    })
  }


  return ( 
    <div className="graph-carousel">
      <div className="graph-header">
        {/* поправить заголовок */}
        <h6 className="graph-title">{dayToShow}</h6>

        <div className="graph-btns-container">
          <button className="btn graph-btn graph-btn--left" onClick={goToPrevGraph}><MdArrowBack /></button>
          <button className="btn graph-btn graph-btn--right" onClick={goToNextGraph}><MdArrowForward /></button>
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