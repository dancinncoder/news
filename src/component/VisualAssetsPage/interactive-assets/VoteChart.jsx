import React from "react";
import { styled } from "styled-components";

const TitleContainer = styled.div``;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #ebebeb;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
`;

const LeftBarChart = styled(Bar)`
  width: ${(props) => props.votes}%;
`;

const RightBarChart = styled(Bar)`
  width: ${(props) => props.votes}%;
  margin-left: auto;
`;

const BidenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TrumpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h2 {
    width: fit-content;
  }
`;

const Border = styled.div`
  border-right: 2.5px solid gray;
`;

function VoteChart() {
  const candidate1Votes = 98;
  const candidate2Votes = 80;

  return (
    <TitleContainer>
      <InnerContainer>
        <BidenContainer>
          <h2>BIDEN</h2>
          <ChartContainer>
            <LeftBarChart votes={candidate1Votes} color="#3498db" />
            <Border />
          </ChartContainer>
        </BidenContainer>
        <TrumpContainer>
          <h2>TRUMP</h2>
          <ChartContainer>
            <RightBarChart votes={candidate2Votes} color="#e74c3c" />
          </ChartContainer>
        </TrumpContainer>
      </InnerContainer>
    </TitleContainer>
  );
}

export default VoteChart;
