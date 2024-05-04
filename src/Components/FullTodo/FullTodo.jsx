import React from "react";
import "./FullTodo.css";
import Input from "./Input/Input";
import TodoList from "./TodoList/TodoList";
import line from "../../../public/Line 3.png";

const FullTodo = () => {
  return (
    <div className="fullTodo">
      <div className="input">
        <Input />
      </div>
      <div className="line">
        <img src={line} alt="" />
      </div>
      <div className="todolist">
        <TodoList />
      </div>
    </div>
  );
};

export default FullTodo;
