/**
 * @name AvailabilityChart
 * @desc Chart that renders historical statistics for availability on the Historical Status tab. Child component of ChartContainer
 */
import React, { useState, useEffect, useContext } from 'react';
import Line from'@ant-design/charts/es/line';
import { historicalContext } from '../contexts/historicalContext';     
const Availability: React.FC = () => {
  
  const { serviceData } = useContext(historicalContext)
  //set ContextAPI state object
  let config = {
    data: serviceData.availability,
    xField: "timestamp",
    yField: 'value',
    seriesField: 'service',
    xAxis: { 
      label: {
        formatter: function formatter(v:any) {
          return v.slice(11,19); 
        }
     } 
    },
    yAxis : { 
      min: 70,
      label: {
        formatter: function formatter(v:any) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
  };
  console.log(config.data, 'config availability')
  if (config.data === undefined) return <div>loading</div>
  return <Line {...config} />;
};

export { Availability } ;  
