import React from "react";
import styled from "styled-components";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import ColumnChart from "./charts/ColumnChart";
import PyramidChart from "./charts/PyramidChart";
import DonutChart from "./charts/DonutChart";
import CandleStickChart from "./charts/CandleStickChart";
import RadarChart from "./charts/RadarChart";
import TreemapChart from "./charts/TreemapChart";

const ChartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 600px) {
    max-width: 750px;
    flex-direction: row;
  }

  @media (min-width: 800px) {
    max-width: 900px;
  }

  @media (min-width: 1150px) {
    max-width: 1000px;
  }

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const ChartInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
function Charts() {
  return (
    <ChartContainer>
      <ChartInnerContainer>
        <LineChart />
        <BarChart />
        <ColumnChart />
        <PyramidChart />
        <DonutChart />
        <CandleStickChart />
        <RadarChart />
        <TreemapChart />
      </ChartInnerContainer>
    </ChartContainer>
  );
}

export default Charts;
