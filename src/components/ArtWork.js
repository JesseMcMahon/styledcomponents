import React from "react";
import styled from "styled-components";

const ArtWork = ({ children }) => {
  const ArtWork = styled.div`
    position: absolute;
    height: 200px;
    width: 200px;
  `;

  return <ArtWork>{children}</ArtWork>;
};

export default ArtWork;
