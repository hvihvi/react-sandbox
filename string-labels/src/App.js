import React, { Component } from "react";
import AppWrapper from "./AppWrapper";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => {
  return {};
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    );
  }
}

export default App;
