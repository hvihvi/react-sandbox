import React from "react";
import "./App.css";
import { AppLogo } from "./AppLogo";
import { AppContainer } from "./AppContainer";

const App = () => (
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
);

export default App;
