import React from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { letterFrequency } from "@visx/mock-data";
import { liveData, historicalContext} from '../contexts/historicalContext' ; 
// const letterFrequency: any = liveData.historical
const letters = liveData.historical.slice(0, 2);
const frequency = (d:any) => d.latency;

const getLetterFrequencyColor = scaleOrdinal({
  domain: letters.map((l) => l.uptime),
  range: ["rgb(255, 153, 102)", "rgb(136,77,255)", "#0b6c38", "rgb(179,0,0)"]
});

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 80 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
};

export default function ErrorChart({
  width,
  height,
  margin = defaultMargin
}: PieProps) {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const top = centerY + margin.top;
  const left = centerX + margin.left;
  const pieSortValues = (a: any, b: any) => b - a;
console.log('let freq ', letterFrequency, 'live data freq ', liveData.historical)
  return (
    <svg width={width} height={height}>
      <Group top={top} left={left}>
        <Pie
          data={letters}
          pieValue={frequency}
          pieSortValues={pieSortValues}
          outerRadius={radius}
        >
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              const { uptime } = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
              const arcPath = pie.path(arc);
              const arcFill = getLetterFrequencyColor(uptime);
              return (
                <g key={`arc-${uptime}-${index}`}>
                  <path d={arcPath} fill={arcFill} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX-45}
                      y={centroidY}
                      dy=".33em"
                      fill="#ffffff"
                      fontSize={18}
                      textAnchor="left"
                      pointerEvents="none"
                    >
                      {arc.data.latency+ "% latency"}
                    </text>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
}
