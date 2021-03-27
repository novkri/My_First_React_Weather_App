import React, { useState } from 'react'
import Graph from './Graph'
import './Graphs.css'

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

  console.log(tempGraph);
    return ( 
      <div className="graph-carousel">
        <div className="graph-header">
          <h6 className="graph-title">{dayToShow}</h6>
          <div>
            <button>&lt;</button>
            <button onClick={goToNextGraph}>&gt;</button>
          </div>
          
        </div>
        
        {tempGraph.length > 0 && <Graph tempGraph={tempGraph} toShow={dayToShow} /> }
      </div>
     );
}
 
// пропсы
// рефактор
export default GraphCarousel;