import React from "react";
import { Select } from "../components/Select";

const SelectAge = ({ age, setAge }) => {
  return (
    <Select value={age} values={[...Array(100).keys()]} setValue={setAge} />
  );
};

export default SelectAge;
