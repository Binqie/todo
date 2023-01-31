import React from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";

function Important() {
  const todos = useSelector((store) => store.todos);
  const importantTodos = todos.filter((todo) => todo.important);

  return (
    <div className="todos">
      <div className="todos-list">
        <h3>Important todos</h3>
      </div>
      <div>
        {importantTodos.map((todo, index) => {
          return <Todo props={todo} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Important;
