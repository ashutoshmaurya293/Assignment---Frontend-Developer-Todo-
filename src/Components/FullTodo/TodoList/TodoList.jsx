import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../../../friebace";

const TodoList = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const studentref = ref(db, "todo");
    onValue(studentref, (snapshort) => {
      const data = snapshort.val();
      // console.log(data);
      if (data) {
        const dataArray = Object?.values(data);
        // console.log(dataArray);
        setData(dataArray);
      }
    });
  }, []);

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
      {Data?.map((e) => (
        <div key={e.todoTitle}>
          <div className="todoList">
            <div className="content">
              <p className="pTitle">{e?.todoTitle}</p>
              <p className="description">{e?.todoDsc}</p>
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
      ))}
    </div>
  );
};

export default TodoList;
