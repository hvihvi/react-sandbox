import * as React from "react";

const TodoList = ({ todos }) => (
  <table>
    <tbody>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>TEAM</th>
        <th>TYPE</th>
        <th>PROJECT</th>
      </tr>
      {todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.team}</td>
          <td>{todo.type}</td>
          <td>{todo.project}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TodoList;
