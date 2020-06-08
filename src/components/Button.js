import React from "react";
import styled from "styled-components";

const Button = () => {
  const Button = styled.button`
    color: white;
    background: ${(props) => (props.primary ? "skyblue" : "red")};
    outline: none;
    height: 50px;
    width: 100px;
    border-radius: 15px;
  `;
  return <Button primary>Click Me</Button>;
};

export default Button;
