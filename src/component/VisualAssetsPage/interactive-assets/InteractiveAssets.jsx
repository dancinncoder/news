import React from "react";
import { styled } from "styled-components";
import Trump from "../../../assets/images/trump.jpg";
import Biden from "../../../assets/images/biden.jpg";
import ElectionMap from "./ElectionMap";
import VoteChart from "./VoteChart";

const InteractiveAssetsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ElectionContainer = styled.div`
  position: relative;
  width: 100%;
`;

const BidenImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 300px;
`;

const TrumpImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 280px;
`;

function InteractiveAssets() {
  return (
    <InteractiveAssetsContainer>
      <InnerContainer>
        <ElectionContainer>
          <VoteChart />
          <ElectionMap />
          <BidenImage src={Biden} alt="Biden" />
          <TrumpImage src={Trump} alt="Trump" />
        </ElectionContainer>
      </InnerContainer>
    </InteractiveAssetsContainer>
  );
}

export default InteractiveAssets;
