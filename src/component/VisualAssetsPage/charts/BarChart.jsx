import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const InnerContainer = styled.div`
  width: 100%;
`;

function BarChart() {
  const chartOptions = {
    chart: {
      height: 300,
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      },
    },
    xaxis: {
      categories: ["Amazon", "Apple", "Google", "Microsoft"],
    },
    colors: ["#009f2a", "#247BA0", "#f0e809", "#ea4444"],
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [20, 58, 73, 41],
    },
  ];

  return (
    <InnerContainer>
      <p>2. Bar Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </InnerContainer>
  );
}

export default BarChart;
