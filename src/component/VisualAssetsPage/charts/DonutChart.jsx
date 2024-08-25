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

function DonutChart() {
  const chartOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    colors: ["#754835", "#ffa407", "#ec5454", "#2d62ff", "#2a7e31"],
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
        },
      },
    },
  };

  const chartSeries = [40, 10, 31, 19, 15];

  return (
    <InnerContainer>
      <p>5. Donut Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={300}
      />
    </InnerContainer>
  );
}

export default DonutChart;
