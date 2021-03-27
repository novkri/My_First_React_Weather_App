import React from 'react';
// import * as V from 'victory';
import './WeatherCard.css'
import { VictoryLabel, VictoryChart, VictoryAxis, VictoryTheme, VictoryBar, VictoryTooltip } from 'victory';

// const data = [
//   {day: 1, temp: 13000},
//   {day: 2, temp: 16500},
//   {day: 3, temp: 14250},
// ];


const Graph = ({ tempGraph, toShow }) => {

  console.log(tempGraph);
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
      labels={({ datum }) => datum[`${toShow}`]}
      labelComponent={<VictoryTooltip pointerLength={0} flyoutStyle={{
        stroke: "none", fill: "rgb(11 11 11 / 41%)"
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
        // !!!!
        y={toShow}
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [
                {
                  target: "data",
                  mutation: () => ({style: {fill: "rgb(60 55 55)", width: 18}})
                }, {
                  target: "labels",
                  mutation: () => ({ active: true })
                }
              ];
            },
            onMouseOut: () => {
              return [
                {
                  target: "data",
                  mutation: () => {}
                }, {
                  target: "labels",
                  mutation: () => ({ active: false })
                }
              ];
            }
          }
        }]}
        // barWidth={10}
      />
    </VictoryChart>
    </div>
   
   );
}
 
export default Graph;