import React, { SFC } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Input: SFC<Props> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={e => onChange(e.target.value)} />
);
