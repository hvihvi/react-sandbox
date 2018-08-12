import * as React from "react";
import { connect } from "react-redux";
import { Input } from "../components/Input";
import { removeDuplicates } from "./utils";
import { updateType } from "../actions/action";

const SelectType = ({ todos, team, type, updateType }) => (
  <Input
    value={type}
    values={filterPossibleTypes(todos, team)}
    updateValue={updateType}
  />
);

const filterPossibleTypes = (todos, team) =>
  removeDuplicates(
    todos.filter(todo => todo.team === team).map(todo => todo.type)
  );

const mapStateToProps = state => {
  return {
    todos: state.reducer.todos,
    team: state.reducer.team,
    type: state.reducer.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateType: type => dispatch(updateType(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectType);
