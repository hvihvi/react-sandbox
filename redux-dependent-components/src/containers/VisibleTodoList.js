import TodoList from "../components/TodoList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    todos: state.reducer.todos.filter(todo => state.reducer.team === todo.team)
  };
};

export default connect(mapStateToProps)(TodoList);
