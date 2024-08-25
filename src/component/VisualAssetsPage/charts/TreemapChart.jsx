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

function TreemapChart() {
  const chartOptions = {
    chart: {
      width: 380,
      type: "treemap",
    },
    colors: [
      "#3B93A5",
      "#44a3f7",
      "#ADD8C7",
      "#3b9e82",
      "#161b0a",
      "#728d63",
      "#273a59",
      "#1E5D8C",
      "#848ddd",
      "#7F94B0",
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
        labels: {
          show: true,
          style: {
            fontSize: "70px",
            fontFamily: "Arial, sans-serif",
            colors: ["#fff"],
          },
        },
      },
    },
  };

  const chartSeries = [
    {
      data: [
        {
          x: "Climate",
          y: 218,
        },
        {
          x: "Crypto",
          y: 149,
        },
        {
          x: "Remote",
          y: 184,
        },
        {
          x: "Wellness",
          y: 68,
        },
        {
          x: "Sustainability",
          y: 55,
        },
        {
          x: "Inflation",
          y: 84,
        },
        {
          x: "Diversity",
          y: 31,
        },
        {
          x: "E-commerce",
          y: 70,
        },
        {
          x: "Mental",
          y: 30,
        },
        {
          x: "AI",
          y: 44,
        },
      ],
    },
  ];

  return (
    <InnerContainer>
      <p>8. Treemap Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="treemap"
        height={300}
      />
    </InnerContainer>
  );
}

export default TreemapChart;
