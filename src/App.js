import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `;

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Hello, click below for more!</Title>
          <Button>Enter</Button>
        </Header>
      </Wrapper>
    </>
  );
}

export default App;
