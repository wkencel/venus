  /**
 * @name ChartContainer
 * @desc Child of Dashboard, Parent container that holds and displays each Chart
 */

import React from "react";
// import { LineGraph } from "../charts/LineGraph"
// import { AreaChart } from "../charts/AreaChart"
// import { CardDropDown } from "../components/CardDropDown";
// import { TestChart } from "../charts/TestChart";
import PieChart from "../charts/PieChart";
// import { Chart } from "../components/Chart";
import { Row, Col } from 'antd'

import { Chart } from '../components/charts/Chart'
import { ChartRender, PieChartRender } from '../components/charts/ChartRender'

function ChartContainer(): JSX.Element {
		<div id="chartContainer">
			<h1>See Your Charts</h1>
			<ChartRender />
			<PieChartRender />
		</div>
  return (
   
    <div id="chartContainer">
        <Row gutter={[16, 16]}>
        <Col span={12}>
            <div className="graphHolder">
			<PieChartRender />
            </div>
          </Col>
          <Col span={2}>
            <div className="graphHolder">
			  <ChartRender />
            </div>
          </Col>
        </Row>
    </div>

// onChange={onChange} >> add for stat level sortability. 
  );
}

export { ChartContainer };
