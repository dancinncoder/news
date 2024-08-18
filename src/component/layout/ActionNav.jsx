import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ActionNavContainer = styled.div`
  background-color: var(--red);
  color: var(--white);
  width: 100%;
  /* height: 98px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
`;

const LogoContainer = styled.div`
  max-width: 976px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const LogoInnerContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.div`
  max-width: unset;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  max-width: 976px;

  /* @media (min-width: 1100px) {
    max-width: 976px;
  } */

  @media (min-width: 1280px) {
    max-width: 1248px;
  }
`;

const NavInnerContainer = styled.div`
  width: 100%;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CategoryTitle = styled.p`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 700;
  line-height: 22px;
  color: var(--white);
  text-transform: uppercase;
`;

const NavListContainer = styled.div``;
const NavList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;

  li:first-child {
    a {
      padding-left: 0;
    }
  }

  li:last-child {
    border-right: none;
  }
`;
const NavItem = styled.li`
  color: var(--white);
  font-family: Helvetica;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  list-style: none;
  text-decoration: none;
  position: relative;
  border-right: 0.2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;

  @media (min-width: 510px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

const NavLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  text-decoration: none;
  color: var(--white);
  padding: 2px 11.4px;
`;

const HoverBar = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: -8px;
  background-color: var(--white);
`;

function ActionNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activatedSlug, setActivatedSlug] = useState(location.pathname);

  const actionNavItemList = [
    { label: "Home", slug: "/" },
    { label: "Charts", slug: "/charts" },
    { label: "Graphs", slug: "/graphs" },
    { label: "Calendar", slug: "/calendar" },
    { label: "Video", slug: "/video" },
    { label: "Poll", slug: "/poll" },
    { label: "3D Assets", slug: "/3d-assets" },
  ];

  useEffect(() => {
    setActivatedSlug(location.pathname);
  }, [location.pathname]);

  return (
    <ActionNavContainer>
      <TopContainer>
        <LogoContainer>
          <LogoInnerContainer>
            <CategoryTitle>news</CategoryTitle>
          </LogoInnerContainer>
        </LogoContainer>
      </TopContainer>
      <BottomContainer>
        <NavContainer>
          <NavInnerContainer>
            <NavListContainer>
              <NavList>
                {actionNavItemList.map((nav) => (
                  <NavItem key={nav.slug}>
                    <NavLink
                      onClick={() => {
                        setActivatedSlug(nav.slug);
                        navigate(nav.slug);
                      }}
                    >
                      {nav.label}
                    </NavLink>
                    {activatedSlug === nav.slug && <HoverBar />}
                  </NavItem>
                ))}
              </NavList>
            </NavListContainer>
          </NavInnerContainer>
        </NavContainer>
      </BottomContainer>
    </ActionNavContainer>
  );
}

export default ActionNav;
