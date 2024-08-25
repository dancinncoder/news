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

function ColumnChart() {
  const chartOptions = {
    chart: {
      height: 300,
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: false,
      },
    },
    xaxis: {
      categories: [
        "2021 Q1",
        "2021 Q2",
        "2021 Q3",
        "2021 Q4",
        "2022 Q1",
        "2022 Q2",
        "2022 Q3",
        "2022 Q4",
      ],
    },
    colors: ["#00529f", "#ffb405", "#4bc85b"],
  };

  const chartSeries = [
    {
      name: "Manufacturing",
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "Technology",
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "Healthcare",
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ];

  return (
    <InnerContainer>
      <p>3. Column Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </InnerContainer>
  );
}

export default ColumnChart;
