  /**
 * @name ChartContainer
 * @desc Child of Dashboard, Parent container that holds and displays each Chart
 */

import React from "react";
import { LineGraph } from "../charts/LineGraph"
import { AreaChart } from "../charts/AreaChart"
import { CardDropDown } from "../components/CardDropDown";
// import { TestChart } from "../charts/TestChart";
import PieChart from "../charts/PieChart";
import { Chart } from "../components/Chart";
import { Row, Col } from 'antd'
import ErrorChart from '../charts/ErrorChart'
import  ParentSize from "@visx/responsive/lib/components/ParentSize";

function ChartContainer(): JSX.Element {
  return (
   
    <div id="chartContainer">
      <CardDropDown /> 
      {/* <ParentSize>
        {({ width, height }) => <ErrorChart width={800} height={400} />}
      </ParentSize> */}
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="graphHolder">
              <LineGraph />
            </div>
          </Col>
          <Col span={12}>
            <div className="graphHolder" >
              <AreaChart />
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
        <Col span={12}>
            <div className="graphHolder">
              <LineGraph />
            </div>
          </Col>
          <Col span={12}>
            <div className="graphHolder">
			<ParentSize>
        	  {({ width, height }) => <ErrorChart width={350} height={350} />}
      		</ParentSize>
            </div>
          </Col>
        </Row>
    </div>

// onChange={onChange} >> add for stat level sortability. 
  );
}

export { ChartContainer };
