import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";
import Featured from "./components/Featured";
import ArtWork from "./components/ArtWork";
import Image from "./components/Image";

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
        <Featured>
          <ArtWork>
            <Image>
              <img src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </Image>
          </ArtWork>
        </Featured>
      </Wrapper>
    </>
  );
}

export default App;
