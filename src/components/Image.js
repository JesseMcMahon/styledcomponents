import React from "react";
import styled from "styled-components";

const Image = ({ children }) => {
  const Image = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  `;

  return <Image>{children}</Image>;
};

export default Image;
