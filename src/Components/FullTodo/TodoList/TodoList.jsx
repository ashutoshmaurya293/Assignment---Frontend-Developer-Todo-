import React from "react";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div id="list">
      <div className="h2">
        <h2>TODO LIST</h2>
      </div>
      <div className="first">
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
        <select className="fillter">
          <option value="Completed">Completed</option>
          <option value="Favourite">Favourite</option>
        </select>
      </div>
      <div className="todoList">
        <div className="content">
          <p className="pTitle">Title 1</p>
          <p className="description">description</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
      <hr />
    </div>
  );
};

export default TodoList;
