import React from "react";

const ComponentContainer = () => (
  <>
    <LfButton label="Hello Button" id="hello-button" />
  </>
);

const LfButton = ({ label, id, ...props }) => (
  <span>
    <input type="radio" {...props} id={id} />
    <label for={id}>{label}</label>
  </span>
);

export default ComponentContainer;
