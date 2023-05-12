import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}
