import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const InnerContainer = styled.div`
  width: 100%;
`;

function LineChart() {
  const chartOptions = {
    chart: {
      height: 300,
      type: "line",
      toolbar: { show: false },
      background: "transparent",
    },
    stroke: { curve: "smooth", width: 4 },
    grid: { show: false },
    yaxis: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["2022-01-01", "2022-01-02", "2022-01-03"],
      type: "datetime",
    },
    colors: ["#FF1654", "#247BA0"],
    tooltip: {
      y: { formatter: (value) => value.toFixed(2) },
    },
  };

  const chartSeries = [
    { name: "Price 1", data: [1000, 2000, 3000] },
    { name: "Price 2", data: [1500, 2500, 3500] },
  ];

  return (
    <InnerContainer>
      <p>1. Line Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={300}
      />
    </InnerContainer>
  );
}

export default LineChart;
