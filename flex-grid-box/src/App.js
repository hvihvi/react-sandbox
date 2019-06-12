import React from "react";
import LayoutWithChildren from "./LayoutWithChildren";
import LayoutWithInject from "./LayoutWithInject";
import Item from "./Item";

const App = () => {
  return (
    <>
      <LayoutWithInject
      children1={<Item>Box1</Item>}
      children2={<Item>Box2</Item>}
      children3={<Item>Box3</Item>}
      />
    </>
  );
};

export default App;
