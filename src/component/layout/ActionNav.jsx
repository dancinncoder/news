import React from "react";
import { styled } from "styled-components";

const ActionNavContainer = styled.div`
  background-color: var(--red);
  color: var(--white);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionNavInnerContainer = styled.div`
  max-width: 976px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const CategoryTitle = styled.p`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 700;
  line-height: 22px;
  color: var(--white);
  text-transform: uppercase;
`;

function ActionNav() {
  return (
    <ActionNavContainer>
      <ActionNavInnerContainer>
        <CategoryTitle>news</CategoryTitle>
      </ActionNavInnerContainer>
    </ActionNavContainer>
  );
}

export default ActionNav;
