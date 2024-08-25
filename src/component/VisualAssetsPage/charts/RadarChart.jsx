import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const InnerContainer = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (min-width: 600px) {
    width: 50%;
    margin: 20px 0;
  }
`;

function RadarChart() {
  const chartOptions = {
    chart: {
      width: 380,
      type: "radar",
    },
    yaxis: {
      stepSize: 20,
    },
    xaxis: {
      categories: [
        "Accuracy",
        "Timeliness",
        "Relevance",
        "Depth",
        "Bias",
        "Readability",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Metric",
      data: [40, 60, 80, 70, 25, 55],
    },
  ];

  return (
    <InnerContainer>
      <p>7. Radar Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="radar"
        height={300}
      />
    </InnerContainer>
  );
}

export default RadarChart;
