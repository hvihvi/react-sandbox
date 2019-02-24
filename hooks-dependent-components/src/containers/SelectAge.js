import React from "react";
import { Select } from "../components/Select";
import { useField } from "../ctx/FieldContext";

const SelectAge = () => {
  const [age, setAge] = useField("age");
  return (
    <Select value={age} values={[...Array(100).keys()]} setValue={setAge} />
  );
};

export default SelectAge;
