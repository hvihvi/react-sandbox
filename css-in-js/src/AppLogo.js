import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const Logo = ({ className }) => (
  <img src={logo} className={className} alt="logo" />
);

export const AppLogo = styled(Logo)`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
