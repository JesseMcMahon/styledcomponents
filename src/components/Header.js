import React from "react";
import styled from "styled-components";

const Header = ({ children }) => {
  const Header = styled.div`
    height: 100vh;
    width: 100vw;
    background: skyblue;
    color: black;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
  `;
  return <Header>{children}</Header>;
};

export default Header;
