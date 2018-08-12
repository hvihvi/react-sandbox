import React, { Component } from "react";
import * as Redux from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import SelectTeam from "./containers/SelectTeam";

const createStoreWithMiddleware = Redux.applyMiddleware(reduxThunk)(
  Redux.createStore
);
const store = createStoreWithMiddleware(
  Redux.combineReducers({ reducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SelectTeam />
      </Provider>
    );
  }
}

export default App;
