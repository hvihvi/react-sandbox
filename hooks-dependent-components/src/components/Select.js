import React, { useEffect } from "react";

export const Select = ({ value, values, setValue }) => {
  useEffect(() => {
    if (!values.includes(value) && values.length > 0) {
      setValue(values[0]);
    }
  });

  return (
    <select
      value={value}
      onChange={event => setValue(Number(event.target.value))}
    >
      {values.map(v => (
        <option value={v} key={v}>
          {v}
        </option>
      ))}
    </select>
  );
};
