import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppContainer = props => (
  <Container>
    <Header {...props} />
  </Container>
);
