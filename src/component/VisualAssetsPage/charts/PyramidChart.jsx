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

function PyramidChart() {
  const chartOptions = {
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    colors: [
      "#F44F5E",
      "#E55A89",
      "#D863B1",
      "#CA6CD8",
      "#B57BED",
      "#8D95EB",
      "#62ACEA",
      "#4BC3E6",
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        // Return the category name and value
        return opts.w.globals.labels[opts.dataPointIndex] + ": " + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: "Pyramid Chart",
      align: "middle",
    },
    xaxis: {
      categories: [
        "Loyal Customers",
        "Closed Deals",
        "Proposals",
        "Opportunities",
        "Qualified Leads",
        "Leads",
        "Potential Customers",
        "Total Market",
      ],
    },
    legend: {
      show: false,
    },
  };

  const chartSeries = [
    {
      name: "",
      data: [400, 530, 648, 840, 980, 1090, 1200, 1380],
    },
  ];

  return (
    <InnerContainer>
      <p>4. Pyramid Chart</p>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </InnerContainer>
  );
}

export default PyramidChart;
