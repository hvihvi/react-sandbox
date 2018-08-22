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
    const { values, updateValue } = this.props;
    return (
      <select onChange={event => updateValue(event.target.value)}>
        {values.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
}
