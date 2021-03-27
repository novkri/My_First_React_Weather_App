import React from 'react'
import './Graphs.css'
import { VictoryLabel, VictoryChart, VictoryAxis, VictoryBar, VictoryTooltip } from 'victory'
import PropTypes from 'prop-types'


const Graph = ({ tempGraph, toShow = 'Day' }) => {
  const data = tempGraph

  return ( 
    <div className="glass chart-container">
       <VictoryChart
        width={390}
        height={200}
        animate={{duration: 500}} 
        domainPadding={15}
      >

      {/* y */}
      <VictoryAxis
        style={
          {
            axis: {stroke: "rgb(217 216 216)"},
            grid: {stroke: "rgb(157 157 157)"},
            tickLabels: {fill: "none"}
          }
        }
      />
      {/* x */}
      <VictoryAxis
        style={
          {
            axis: {stroke: "rgb(217 216 216)"},
            grid: {stroke: "rgb(157 157 157)"},
            tickLabels: {fontSize: 7, padding: 3, fill: "#fff"}
          }
        }
        dependentAxis
        tickFormat={(x) => (x)} 
      />

      <VictoryBar
        labels={({ datum }) => [`${datum.day}`, `${datum[`${toShow}`]} °C`]}
        labelComponent={
          <VictoryTooltip
            pointerLength={2}
            flyoutStyle={
              {
                stroke: "none", fill: "rgb(81 81 81 / 83%)"
              }
            }
          />
        }
        style={
          {
            data: { fill: "#fff", cursor: "pointer"}, 
            labels: {
              fontSize: 7,
              fill: "#fff",
              padding: 8,
              textTransform: "capitalize",
            }
          }
        }
        data={data}
        x="day"
        y={toShow}
      />
    </VictoryChart>
    </div>
   );
}


Graph.propTypes = {
  tempGraph: PropTypes.arrayOf(PropTypes.object),
  toShow: PropTypes.string,
}

export default Graph;