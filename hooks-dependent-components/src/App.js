import React from "react";
import SelectAge from "./containers/SelectAge";
import FieldContext from "./ctx/FieldContext";

const App = () => {
  return (
    <FieldContext initialState={initialState}>
      <SelectAge />
    </FieldContext>
  );
};

const initialState = {
  age: 20
};

export default App;
