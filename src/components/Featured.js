import React from "react";
import styled from "styled-components";

const Featured = ({ children }) => {
  const Featured = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  return <Featured>{children}</Featured>;
};

export default Featured;
