import TodoList from "../components/TodoList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    todos: state.reducer.todos
      .filter(todo => state.reducer.team === todo.team)
      .filter(todo => state.reducer.type === todo.type)
  };
};

export default connect(mapStateToProps)(TodoList);
