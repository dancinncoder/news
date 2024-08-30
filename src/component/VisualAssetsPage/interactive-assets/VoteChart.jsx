import React from "react";
import styled from "styled-components";

// Styled components
const VoteChartContainer = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  color: gray;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: #ebebeb;
  position: relative;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}%;
  display: flex;
  align-items: center;
  position: absolute;
  ${(props) => props.rightAlign && "right: 0;"}
`;

const Label = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  padding: ${(props) =>
    props.candidate === "biden" ? "0 0 0 10px" : "0 10px 0 0"};
  text-align: ${(props) => (props.candidate === "biden" ? "left" : "right")};
  width: 100%;
`;

const Border = styled.div`
  border: 1px solid gray;
  height: 70px;
  margin-top: 28px;
`;

const CandidateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CandidateName = styled.p`
  font-size: 40px;
  font-weight: 600;
  text-align: ${(props) => (props.candidate === "biden" ? "left" : "right")};
  color: ${(props) => (props.candidate === "biden" ? "#3498db" : "#e74c3c")};
  margin: 0;
  padding: 5px;
  width: 100%;
`;

const ShortNumber = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.candidate === "biden" ? "#3498db" : "#e74c3c")};
  margin: 0;
  padding: 10px 0 0;
  text-align: ${(props) => (props.candidate === "biden" ? "left" : "right")};
  width: 100%;
`;

function VoteChart({ data }) {
  // Aggregate votes
  const candidate1Votes = Object.values(data).reduce(
    (total, state) => total + (state.Biden || 0),
    0
  );
  const candidate2Votes = Object.values(data).reduce(
    (total, state) => total + (state.Trump || 0),
    0
  );

  // Define target number of electoral votes
  const targetVotes = 270;

  // Calculate percentages relative to the target votes
  const candidate1Percentage = Math.min(
    (candidate1Votes / targetVotes) * 100,
    100
  );
  const candidate2Percentage = Math.min(
    (candidate2Votes / targetVotes) * 100,
    100
  );

  return (
    <VoteChartContainer>
      <InnerContainer>
        <CandidateContainer>
          <CandidateName candidate="biden">BIDEN</CandidateName>
          <ChartContainer>
            <Bar width={candidate1Percentage} color="#3498db">
              <Label candidate="biden">{candidate1Votes}</Label>
            </Bar>
          </ChartContainer>
          <ShortNumber candidate="biden">
            BIDEN SHORT BY {Math.max(0, targetVotes - candidate1Votes)}
          </ShortNumber>
        </CandidateContainer>
        <Border />
        <CandidateContainer>
          <CandidateName candidate="trump">TRUMP</CandidateName>
          <ChartContainer>
            <Bar width={candidate2Percentage} color="#e74c3c" rightAlign>
              <Label candidate="trump">{candidate2Votes}</Label>
            </Bar>
          </ChartContainer>
          <ShortNumber candidate="trump">
            TRUMP SHORT BY {Math.max(0, targetVotes - candidate2Votes)}
          </ShortNumber>
        </CandidateContainer>
      </InnerContainer>
      <TitleContainer>270 TO WIN</TitleContainer>
    </VoteChartContainer>
  );
}

export default VoteChart;
