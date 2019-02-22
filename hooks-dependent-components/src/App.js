import React, { useReducer } from "react";
import "./App.css";
import SelectAge from "./containers/SelectAge";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <SelectAge
        age={state.age}
        setAge={value => dispatch(setAgeAction(value))}
      />
    </div>
  );
};

const setAgeAction = age => {
  return {
    type: "SET_AGE",
    age
  };
};

const initialState = {
  age: 20
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AGE":
      return { ...state, age: action.age };
    default:
      return state;
  }
};

export default App;
