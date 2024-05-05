import React, { useState } from "react";
import "./FullTodo.css";
import Input from "./Input/Input";
import TodoList from "./TodoList/TodoList";
import line from "../../../public/Line 3.png";

const FullTodo = () => {
  const [select, setselect] = useState("");
  return (
    <div className="fullTodo">
      <div className="input">
        <Input select={select} setselect={setselect}/>
      </div>
      <div className="line">
        <img src={line} alt="" />
      </div>
      <div className="todolist">
        <TodoList select={select} setselect={setselect}/>
      </div>
    </div>
  );
};

export default FullTodo;
