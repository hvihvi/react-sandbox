import React from "react";
import { Select } from "../components/Select";
import { useField } from "../ctx/FieldContext";

const SelectInsuranceAge = () => {
  const [insuranceAge, setInsuranceAge] = useField("INSURANCE_AGE");
  const [carAge] = useField("CAR_AGE");
  const [licenseAge] = useField("LICENCE_AGE");
  return (
    <Select
      value={insuranceAge}
      values={[...Array(100).keys()].filter(
        age => age <= carAge || age <= licenseAge
      )}
      setValue={setInsuranceAge}
    />
  );
};

export default SelectInsuranceAge;
