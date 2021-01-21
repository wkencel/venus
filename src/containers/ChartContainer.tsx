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
import ErrorChart from '../charts/ErrorChart'
import  ParentSize from "@visx/responsive/lib/components/ParentSize";
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Card from 'antd/es/card'
import Divider from "antd/es/divider";
import { HistoricalProvider } from '../contexts/historicalContext'

function ChartContainer(): JSX.Element {
  return (
   
    <div id="chartContainer">
	  <HistoricalProvider>
      <CardDropDown /> 
      {/* <ParentSize>
        {({ width, height }) => <ErrorChart width={800} height={400} />}
      </ParentSize> */}
        <Row gutter={[16, 16]}>
      <Divider></Divider>
        <Row gutter={[32,32]}>
          <Col span={12}>
          <Card bordered={true} hoverable={true} style={{width: "500px"}}>
              <LineGraph />
            </Card>
          </Col>
          <Col span={12}>
          <Card bordered={true} hoverable={true} style={{width: "500px"}}>
              <AreaChart />
            </Card>
          </Col>
        </Row>
        <Row gutter={[32,32]}>
          <Col span={12}>
            <Card bordered={true} hoverable={true} style={{width: "500px"}}>
              <LineGraph />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true} hoverable={true} style={{width: "500px"}}>
              <PieChart />
            </Card>
          </Col>
        </Row>
		</Row>
	  </HistoricalProvider>
    </div>


  );
}
/* // onChange={onChange} >> add for stat level sortability.  */
export { ChartContainer };
