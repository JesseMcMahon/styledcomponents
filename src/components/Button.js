import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  const Button = styled.button`
    color: white;
    background: ${(props) => (props.primary ? "skyblue" : "red")};
    outline: none;
    border-radius: 15px;
    border: ${(props) => (props.primary ? "1px solid black" : null)};
    padding: 1rem 3rem;
    font-size: 1.8rem;
    margin: 1rem;
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
      transition: 0.7s;
    }
  `;
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default Button;
