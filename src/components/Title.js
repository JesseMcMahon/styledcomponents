import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  const Title = styled.h1`
    font-size: 6.5rem;
    text-align: center;
    margin-bottom: 20rem;
    margin-top: 15rem;
  `;

  return <Title>{children}</Title>;
};

export default Title;
