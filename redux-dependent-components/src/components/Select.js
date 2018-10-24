import React from "react";

export class Select extends React.Component {
  componentDidMount() {
    this.resetValueIfNotAvailable();
  }
  componentDidUpdate() {
    this.resetValueIfNotAvailable();
  }

  resetValueIfNotAvailable() {
    const { value, values, updateValue } = this.props;
    if (!values.includes(value) && values.length > 0) {
      updateValue(values[0]);
    }
  }

  render() {
    const { value, values, updateValue } = this.props;
    return (
      <select value={value} onChange={event => updateValue(event.target.value)}>
        {values.map(v => (
          <option value={v} key={v}>
            {v}
          </option>
        ))}
      </select>
    );
  }
}
