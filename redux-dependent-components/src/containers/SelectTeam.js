import * as React from "react";
import { connect } from "react-redux";
import { Input } from "../components/Input";
import { updateTeam } from "../actions/action";
import { removeDuplicates } from "./utils";

const SelectTeam = ({ todos, team, updateTeam }) => (
  <Input
    value={team}
    values={filterPossibleTeams(todos)}
    updateValue={updateTeam}
  />
);

const filterPossibleTeams = todos =>
  removeDuplicates(todos.map(todo => todo.team));

const mapStateToProps = state => {
  return {
    todos: state.reducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTeam: team => dispatch(updateTeam(team))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTeam);
