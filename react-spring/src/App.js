import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";

const App = () => {
  const props = useSpring({ paddingLeft: 0, from: { paddingLeft: 10000 } });
  return (
    <div className="App">
      <header  className="App-header">
        <animated.img style={props} src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
};

export default App;
