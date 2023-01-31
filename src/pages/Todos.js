import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { addTodoAsync } from "../redux/asyncActions/addTodoAsync";

function Todos() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isCompleted, setCompleteness] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCompletenessChange = (event) => {
    setCompleteness(event.target.checked);
  };

  const addTodo = () => {
    const todo = {
      title: title,
      completed: isCompleted,
      important: false,
      id: Date.now(),
    };

    dispatch(addTodoAsync(todo));
  };

  return (
    <div className="todos">
      <div className="add-todo mb-3">
        <div className="todos-list">
          <h2 className="form-label">Add todo</h2>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={handleCompletenessChange}
            />
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to do..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleTitleChange}
          />
          <button
            onClick={() => addTodo()}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
      <div className="todos">
        <div className="todos-list">
          <h3>Todos list</h3>
        </div>
        <ul className="list-group">
          {todos.map((todo, index) => {
            return <Todo props={todo} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
