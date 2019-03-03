import React from "react";
import { Select } from "../components/Select";
import { useField } from "../ctx/FieldContext";

const SelectCarAge = () => {
  const [carAge, setCarAge] = useField("CAR_AGE");
  const [licenseAge] = useField("LICENSE_AGE");
  return (
    <Select
    value={carAge}
    values={[...Array(100).keys()].filter(age => age <= licenseAge)}
    setValue={setCarAge}
    />
  );
};

export default SelectCarAge;
