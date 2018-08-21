import SelectTeam from "./SelectTeam";
import SelectType from "./SelectType";
import SelectProject from "./SelectProject";
import VisibleTodoList from "./VisibleTodoList";
import React from "react";

const AppLayout = () => (
  <div>
    <SelectTeam />
    <SelectType />
    <SelectProject />
    <hr />
    <VisibleTodoList />
  </div>
);

export default AppLayout;
