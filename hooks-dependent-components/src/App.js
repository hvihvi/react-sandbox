import React from "react";
import SelectAge from "./containers/SelectAge";
import SelectLicenseAge from "./containers/SelectLicenseAge";
import FieldContext from "./ctx/FieldContext";

const App = () => {
  return (
    <FieldContext initialState={initialState}>
      <div>How old are you?</div>
      <SelectAge />
      <div>How many years have you had your driver's license?</div>
      <SelectLicenseAge />
      <div>How many years have you drove your last car?</div>
      <div>How many years have you had a car insurance?</div>
    </FieldContext>
  );
};

const initialState = {
  AGE: 20
};

export default App;
