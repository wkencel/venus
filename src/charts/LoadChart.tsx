/**
 * @name LoadChart
 * @desc Chart that displays in historical status page rendering historical load statistics. Child component of ChartContainer.
 */

import React, { useState, useEffect, useContext } from "react";
import Area from "@ant-design/charts/es/area";
import { historicalContext } from "../contexts/historicalContext";
function LoadChart(): JSX.Element {
  const { serviceData } = useContext(historicalContext);

  var config = {
    data: serviceData["last-hour"]["load"],
    xField: "time",
    yField: "value",
    seriesField: "method",
  };
  return <Area {...config} autoFit={true} />;
}
export { LoadChart };
