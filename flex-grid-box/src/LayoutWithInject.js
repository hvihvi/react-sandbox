import React from "react";
import FlexContainer from "./FlexContainer";
import Container from "./Container";

const Layout = ({ children1, children2, children3 }) => (
  <Container>
    <FlexContainer>
      {children1}
      {children2}
      {children3}
    </FlexContainer>
  </Container>
);

export default Layout;
