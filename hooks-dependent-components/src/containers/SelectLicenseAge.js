import React from "react";
import { Select } from "../components/Select";
import { useField } from "../ctx/FieldContext";

const SelectLicenseAge = () => {
  const [age] = useField("AGE");
  const [licenseAge, setLicenseAge] = useField("LICENSE_AGE");
  return (
    <Select
      value={licenseAge}
      values={[...Array(100).keys()].filter(lcsAge => lcsAge < age - 16)}
      setValue={setLicenseAge}
    />
  );
};

export default SelectLicenseAge;
