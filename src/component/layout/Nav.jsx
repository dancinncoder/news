import React from "react";
import { styled } from "styled-components";
import Logo from "../../assets/logo/bbc_logo.svg";

const NavContainer = styled.div`
  height: 56px;
  width: 100%;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 976px;
  width: 100%;
  height: 100%;

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const LogoContainer = styled.a`
  text-decoration: none;
  height: 32px;
  width: 112px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

function Nav() {
  return (
    <NavContainer>
      <NavInnerContainer>
        <LogoContainer href="/">
          <LogoImage src={Logo} alt="BBC Logo" />
        </LogoContainer>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Nav;
