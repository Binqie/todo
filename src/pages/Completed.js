import React from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";

function Completed() {
  const todos = useSelector((store) => store.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todos">
      <div className="todos-list">
        <h3>Completed todos</h3>
      </div>
      <div>
        {completedTodos.map((todo, index) => {
          return <Todo props={todo} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Completed;
