import React, { useReducer, useContext } from "react";
import SelectAge from "./containers/SelectAge";

export const FieldContext = React.createContext();

const App = () => {
  return (
    <FieldContext.Provider value={useReducer(reducer, initialState)}>
      <SelectAge />
    </FieldContext.Provider>
  );
};

export const useField = fieldId => {
  const [state, dispatch] = useContext(FieldContext);
  return [state[fieldId], value => dispatch({ type: fieldId, value })];
};

const initialState = {
  age: 20
};

const reducer = (state, action) => {
  console.log(action);
  return { ...state, [action.type]: action.value };
};

export default App;
