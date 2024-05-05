import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { getDatabase, onValue, ref, remove, update } from "firebase/database";
import { app } from "../../../friebace";

const TodoList = ({ setselect, select }) => {
  const [Data, setData] = useState();

  useEffect(() => {
    // Function to filter completed todos
    if (Data && select == "Completed") {
      const filterCompletedTodos = async () => {
        const filteredTodos = await Object.entries(Data)
          .filter(([key, value]) => value.Completed === true)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
        // setData(filteredTodos);
        setData(filteredTodos);
      };

      filterCompletedTodos();
    } else if (Data && select == "na") return;
  }, [select]);

  useEffect(() => {
    // Function to filter completed todos
    if (Data && select == "Favourite") {
      const filterCompletedTodos = async () => {
        const filteredTodos = await Object.entries(Data)
          .filter(([key, value]) => value.favorite === true)
          .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
        // setData(filteredTodos);
        setData(filteredTodos);
      };

      filterCompletedTodos();
    } else if (Data && select == "na") return;
  }, [select]);

  useEffect(() => {
    const takeData = async () => {
      const db = getDatabase(app);
      const TodoRef = ref(db, "todo");
      onValue(TodoRef, (snapshort) => {
        const data = snapshort.val();
        setData(data);
      });
    };
    takeData();
  }, [select]);
  const ToggleOpen = (id) => {
    setData((prevData) => {
      // Create a new object with updated toggle property
      const updatedData = {
        ...prevData,
        [id]: { ...prevData[id], toggle: true },
      };
      return updatedData;
    });
  };
  const DeliteHandaler = (id) => {
    setData((prevData) => {
      // Create a new object with updated toggle property
      const updatedData = {
        ...prevData,
        [id]: { ...prevData[id], toggle: false },
      };
      return updatedData;
    });
    const db = getDatabase(app);
    const TodoRef = ref(db, "todo/" + id);
    remove(TodoRef);
  };
  const FavouriteHandaler = (id) => {
    setData((prevData) => {
      // Create a new object with updated toggle property
      const updatedData = {
        ...prevData,
        [id]: { ...prevData[id], toggle: false },
      };
      return updatedData;
    });
    const db = getDatabase(app);
    const TodoRef = ref(db, "todo/" + id);
    update(TodoRef, {
      favorite: true,
    });
  };
  const CompletedHandaler = (id) => {
    setData((prevData) => {
      // Create a new object with updated toggle property
      const updatedData = {
        ...prevData,
        [id]: { ...prevData[id], toggle: false },
      };
      return updatedData;
    });
    const db = getDatabase(app);
    const TodoRef = ref(db, "todo/" + id);
    update(TodoRef, { Completed: true });
  };
  return (
    <div id="list">
      <div className="h2">
        <h2>TODO LIST</h2>
      </div>
      <div className="first">
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
        <select
          className="fillter"
          value={select}
          onChange={(e) => setselect(e.target.value)}
        >
          <option value="na">Filter By</option>
          <option value="Completed">Completed</option>
          <option value="Favourite">Favourite</option>
        </select>
      </div>

      {Data &&
        Object.entries(Data).map(([key, value]) => {
          return (
            <div key={key}>
              <div className="todoList">
                <div className="content">
                  <p className="pTitle">{value?.todoTitle}</p>
                  <p className="description">{value?.todoDsc}</p>
                </div>
                {/* More */}
                <svg
                  onClick={() => ToggleOpen(key)}
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

                <div className={value?.toggle ? "fun" : "none"}>
                  <li onClick={() => CompletedHandaler(key)}>Completed</li>
                  <li onClick={() => FavouriteHandaler(key)}>Favourite</li>
                  <li onClick={() => DeliteHandaler(key)}>Delete</li>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
