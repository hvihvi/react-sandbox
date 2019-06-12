import styled from "styled-components";
import Logo from "./Logo";
import React from "react";

const Box = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
  text-align: center;
`;

const Item = ({ children }) => (
  <Box>
    <Logo />
    {children}
  </Box>
);

export default Item;
