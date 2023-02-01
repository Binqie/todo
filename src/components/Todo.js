import React from "react";
import { useDispatch } from "react-redux";
import { completeTodoAsync } from "../redux/asyncActions/completeTodoAsync";
import { deleteTodoAsync } from "../redux/asyncActions/deleteTodoAsync";
import { tagTodoAsync } from "../redux/asyncActions/tagTodoAsync";

function Todo({ props }) {
  const dispatch = useDispatch();

  const removeTodo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  const tagTodo = (id, bool) => {
    dispatch(tagTodoAsync(id, !bool));
  };

  const completeTodo = (id, bool) => {
    dispatch(completeTodoAsync(id, !bool));
  };

  return (
    <div className="input-group mb-3">
      <div className="star">
        {props.important ? (
          <img
            onClick={() => tagTodo(props._id, props.important)}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nLVVvUoDQRDe+P8EuZmo2FiJvoCFKIjkFdJokKCgBLVRn0cQxUIbtQ3ebMTCRnOFpYUSEItUgWQHVuZiQnLkzuBdBgYWZub7dr/d2VFqQLNlJ82U2WaCLVmrJK1RdhYNwTdrtOJG41fjMb2UCLi9UqOs0WuDd7knsdgErJ18H/Bfd/Lxdn8/P2kI38MIJCY5MXYPRz4YhZ3Ajx0OvuOn6RnjQpY1HhuNZ4awFi5P5xQ1yfVrXMgKRi+oVSNMeGIIPv8C4wHdEHww4am1KqWYnP2kgDnoLuwpJqwMjUDDixC8Do2AsKKYYHeIBDt+pxqCy6TBDcFFp9PtsxpnDTcJan9tS2qs97l6CxNMeJeALLeC1b/RSnNTRmP137JorApGeCdblTIE9Ri616VxwwkeMrNxJbLBr6LbjHbWYmhvW6dwVkMJWGMhgVdUiCIoJkBQjJAINyIu8I0JNsX9dWheZj2UoEUC54Eij13Mdc9ff067mAvOaqmNBG9bs5xZZsKDZhlWop6dxORSRRap6Zf0A6sqNYGii77mAAAAAElFTkSuQmCC"
          />
        ) : (
          <img
            onClick={() => tagTodo(props._id, props.important)}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nK1Vz2tTQRDe+vsv6NtNFS+eRE+CBw9ioEgF7xoElVAUlKJe1LP+B8WTh4KRYhGsHmwvHoqZTSlUqtWnFS8VYhuMwSQHQ9vdfSMz6YsvNgl9TT5YWHZmv292d2ZWiG0Cc16/hUTagrxCc9FLrOe8YwZkyWqFNIxWxfXZ/uM9IcfnYrfVyrfzJxFr33jQnNbI1rWA1d5VijooTWOIoDTFJyFbd9FPH9lvQH13H84RLUbhFs8j2cini+jlHY6+DE3kfIrKbP0UoG5vP+K5gYMmK4esVneNVhkDquL8i1vIG6fwL9ApKuTLe7JyiDiaSVHssqDuGZArYZbwmD+B7vMlDP58aStANvIh3+heA/KHBXUfUfQJC95NWnRLaQwKTzCoziGaKsaGqfJe4iAuFsvKG8KC+uT8FPYazk+h1XKRBD52uuedgt6HghcW5HXOlPwj7BWClcdhhl3jSjUgJ6xOYLA61j356hgSlwH5rFHp+E7stVq+ZJFCZufkPyfQ6gG6+0mcEXua09U/us+CmiKHoDgZn7z4ok4O6jVxtS60mcMHjFYFSrO4cEtp6rIF4mhfySj6DMiaW34YX2D5Ad17jQq3vcDbxCHOqMLT2AJBIcOZs6VVRGG0l2SBCsQXKMNmm/DOtBWwWg1zFGv5VhQY/H7D4//WzVjLh71ouJPACAu4WmSn4w/GvR9sNDOa0xrZ/rnVQvtIhytSZ+tVPYpoyhj8eoVuIRl2yK8W5GUaPCehhST7sG9+dNMvMdhWoC4ix5vaNv3HWZWK/r/8T2dVim3RNq3leEfyEBu5xCkL6tZGTp7ulHZko0ela6E9rZz+Ag3GPz///29aAAAAAElFTkSuQmCC"
          />
        )}
      </div>
      <div className="input-group-text">
        <input
          onClick={() => completeTodo(props._id, props.completed)}
          className="form-check-input mt-0"
          type="checkbox"
          checked={props.completed}
        />
      </div>
      <input
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
        type="text"
        className="form-control"
        placeholder={props.title}
        aria-label="Recipient's username"
        disabled
      />
      <button
        onClick={() => removeTodo(props._id)}
        className="btn btn-primary delete-todo"
        type="button"
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAu0lEQVR4nO2VMQ4CIRBFqWz1fFqop7Clcy3VE6hX8QpbuZZYr5U25pmfUFAJrERj3J9MMgPDvMyEgDF/IWAArIAL4IBKayUBFfAADt7kL0sCHLAPYkFcl0Jn3lfzCjD345CO3k8x5eL9WUonks3o3OpAzqg+CwAmQB3ENTAuCbBhgdh+DzD9iMw3btEUOAVxo7VigJi6AK7AJiN/C7Q5AL33N2ANLCKmnDuwywGM9MH4TmJqVRwYJgN+Sk9aUXC5lpAj0gAAAABJRU5ErkJggg==" />
      </button>
    </div>
  );
}

export default Todo;
