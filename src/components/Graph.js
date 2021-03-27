import React from 'react'
import './WeatherCard.css'
import { VictoryLabel, VictoryChart, VictoryAxis, VictoryBar, VictoryTooltip } from 'victory';


const Graph = ({ tempGraph, toShow }) => {
  const data = tempGraph

  return ( 
    <div className="glass chart-container">
       <VictoryChart  width={390} height={200} animate={{duration: 500}} 
        domainPadding={15}
      >
      <VictoryAxis style={{ axis: {stroke: "rgb(217 216 216)"},  grid: {stroke: "rgb(157 157 157)"},
        tickLabels: {fontSize: 6, padding: 70, fill: "#fff", textTransform: "capitalize"} }}
          tickFormat={(tick) => `${tick}`}
          tickLabelComponent={<VictoryLabel dy={20} />}
        />
        <VictoryAxis
        style={{ axis: {stroke: "rgb(217 216 216)"}, grid: {stroke: "rgb(157 157 157)"},
        tickLabels: {fontSize: 7, padding: 3, fill: "#fff"} }}
          dependentAxis
          tickFormat={(x) => (x)} 
        />

      <VictoryBar
      labels={({ datum }) => `${datum[`${toShow}`]} C`}
      // labelComponent={
      //   <VictoryLabel angle={-45} textAnchor="end" active={false}  />
      // }
      labelComponent={<VictoryTooltip pointerLength={2} flyoutStyle={{
        stroke: "none", fill: "rgb(81 81 81 / 85%)"
      }}
     />}
        style={{ data: { fill: "#fff" }, 
        labels: {
          fontSize: 6,
          fill: "#fff" 
        } 
      }}
        data={data}
        x="day"
        y={toShow}
      />
    </VictoryChart>
    </div>
   );
}
 
export default Graph;