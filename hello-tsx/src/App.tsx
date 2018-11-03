import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/Input";

interface State {
  name: string;
}

class App extends Component {
  state: State = {
    name: ""
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input
            value={this.state.name}
            onChange={e => this.setState({ name: e })}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello {this.state.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
