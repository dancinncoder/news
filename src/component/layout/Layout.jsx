import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { styled } from "styled-components";
import ActionNav from "./ActionNav";

const Header = styled.header`
  width: 100%;
`;

function Layout(props) {
  return (
    <div>
      <Header>
        <Nav />
        <ActionNav />
      </Header>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
