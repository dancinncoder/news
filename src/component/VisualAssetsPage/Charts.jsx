import React from "react";
import styled from "styled-components";
import LineChart from "./charts/LineChart";

const GraphsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
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

function Charts() {
  return (
    <GraphsContainer>
      <LineChart />
    </GraphsContainer>
  );
}

export default Charts;
