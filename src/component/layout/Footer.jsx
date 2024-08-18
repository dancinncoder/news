import React from "react";
import { styled } from "styled-components";

const FooterContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: var(--black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterInnerContainer = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 976px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>Footer</FooterInnerContainer>
    </FooterContainer>
  );
}

export default Footer;
