import React from "react";
import "./App.css";
import { AppLogo } from "./AppLogo";
import { AppContainer } from "./AppContainer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import ComponentContainer from "./ComponentContainer";

const theme = {
  backgroundColor: "#282c34"
};

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={CRA} />
      <Route exact path="/components" component={ComponentContainer} />
    </>
  </BrowserRouter>
);

const CRA = () => (
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
