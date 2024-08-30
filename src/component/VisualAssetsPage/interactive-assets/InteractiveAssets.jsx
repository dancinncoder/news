import React, { useState } from "react";
import { styled } from "styled-components";
import Trump from "../../../assets/images/trump.jpg";
import Biden from "../../../assets/images/biden.jpg";
import ElectionMap from "./ElectionMap";
import VoteChart from "./VoteChart";
import { fakeData } from "../../../util/getFakeData";

// Styled components
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
  width: 300px;
`;

const TimeSlotSelector = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 0;

  @media (min-width: 1280px) {
    margin: 0 0 20px 0;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  background-color: ${(props) => (props.active ? "#3498db" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
`;

const InteractiveAssets = () => {
  const [timeSlot, setTimeSlot] = useState("9AM");

  const handleClick = (slot) => {
    setTimeSlot(slot);
  };

  const data = fakeData[timeSlot] || {};

  return (
    <InteractiveAssetsContainer>
      <InnerContainer>
        <VoteChart data={data} />
        <ElectionContainer>
          <ElectionMap data={data} />
          <BidenImage src={Biden} alt="Biden" />
          <TrumpImage src={Trump} alt="Trump" />
        </ElectionContainer>
      </InnerContainer>
      <TimeSlotSelector>
        {["9AM", "12PM", "3PM", "6PM"].map((slot) => (
          <Button
            key={slot}
            active={timeSlot === slot}
            onClick={() => handleClick(slot)}
          >
            {slot}
          </Button>
        ))}
      </TimeSlotSelector>
    </InteractiveAssetsContainer>
  );
};

export default InteractiveAssets;
