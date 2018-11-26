import React from "react";
import "./App.css";
import { AppLogo } from "./AppLogo";
import { AppContainer } from "./AppContainer";
import { ThemeProvider } from "styled-components";

const theme = {
  backgroundColor: "#282c34"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <AppLogo clockwise={false} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </AppContainer>
  </ThemeProvider>
);

export default App;
