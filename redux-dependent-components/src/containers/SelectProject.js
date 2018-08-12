import * as React from "react";
import { connect } from "react-redux";
import { Input } from "../components/Input";
import { removeDuplicates } from "./utils";
import { updateProject, updateType } from "../actions/action";

const SelectProject = ({ todos, team, type, project, updateProject }) => (
  <Input
    value={project}
    values={filterPossibleProjects(todos, team, type)}
    updateValue={updateProject}
  />
);

const filterPossibleProjects = (todos, team, type) =>
  removeDuplicates(
    todos
      .filter(todo => todo.team === team)
      .filter(todo => todo.type === type)
      .map(todo => todo.project)
  );

const mapStateToProps = state => {
  return {
    todos: state.reducer.todos,
    team: state.reducer.team,
    type: state.reducer.type,
    project: state.reducer.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => dispatch(updateProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProject);
