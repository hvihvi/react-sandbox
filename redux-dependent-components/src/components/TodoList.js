import * as React from "react";

const TodoList = ({ todos }) => (
  <table>
    <tr>
      <th>ID</th>
      <th>TITLE</th>
      <th>TEAM</th>
      <th>TYPE</th>
      <th>PROJECT</th>
    </tr>
    {todos.map(todo => (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.team}</td>
        <td>{todo.type}</td>
        <td>{todo.project}</td>
      </tr>
    ))}
  </table>
);

export default TodoList;
