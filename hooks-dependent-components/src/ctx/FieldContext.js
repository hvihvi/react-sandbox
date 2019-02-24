import React, { useReducer, useContext } from "react";

export const Ctx = React.createContext();

const FieldContext = ({ initialState, children }) => {
  return (
    <Ctx.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Ctx.Provider>
  );
};

export const useField = fieldId => {
  const [state, dispatch] = useContext(Ctx);
  return [state[fieldId], value => dispatch({ type: fieldId, value })];
};

const reducer = (state, action) => {
  console.log(action);
  return { ...state, [action.type]: action.value };
};

export default FieldContext;
