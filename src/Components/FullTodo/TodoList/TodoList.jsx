import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { db } from "../../../friebace";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({ setselect, select }) => {
  const [MainData, setMainData] = useState();
  const [Data, setData] = useState([]);
  const [search, setsearch] = useState("");

  // GET DATA
  useEffect(() => {
    const GetTodo = async () => {
      try {
        const TodoRef = collection(db, "todos");

        onSnapshot(TodoRef, (snapshot) => {
          const TodoList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(TodoList);
          setData(TodoList);
          setMainData(TodoList);
          return TodoList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    GetTodo();
  }, []);
  // CompleteTodo and favoriteTodo
  useEffect(() => {
    if (Data && select == "Completed") {
      const CompleteTodo = MainData.filter((task) => task.Completed === true);
      setData(CompleteTodo);
    }
    if (Data && select == "Favourite") {
      const favoriteTodo = MainData?.filter((task) => task.favorite === true);
      setData(favoriteTodo);
    } else if (select == "na") {
      setData(MainData);
    }
  }, [select]);

  const ToggleOpen = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, toggle: true };
        }
        return item;
      });
    });
  };

  // DeleteHandaler

  const DeleteHandaler = async (id) => {
    toast.success("Todo Deleted")
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, toggle: false };
        }
        return item;
      });
    });
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (error) {
      console.log(error);
    }
  };
  // FavouriteHandaler

  const FavouriteHandaler = async (id) => {
    toast.success("Todo Added in Favourite List")
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, toggle: false };
        }
        return item;
      });
    });
    try {
      const contactRef = doc(db, "todos", id);
      await updateDoc(contactRef, {
        favorite: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // CompletedHandaler
  const CompletedHandaler = async (id) => {
    toast.success("Todo Completed")
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, toggle: false };
        }
        return item;
      });
    });
    try {
      const contactRef = doc(db, "todos", id);
      await updateDoc(contactRef, {
        Completed: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // search Todo
  useEffect(() => {
    const filterData = MainData?.filter((e) =>
      e?.todo?.toLowerCase().includes(search.toLowerCase())
    );
    setData(filterData);
  }, [search]);

  return (
    <div id="list">
      <div className="h2">
        <h2>TODO LIST</h2>
      </div>
      <div className="first">
        <div className="search">
          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
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
        Data?.map((e) => {
          return (
            <div key={e.id}>
              <div className="todoList">
                <div className="content">
                  <p className="pTitle">{e?.todo}</p>
                  <p className="description">{e?.dsc}</p>
                </div>
                {/* More */}
                <svg
                  onClick={() => ToggleOpen(e?.id)}
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

                <div className={e?.toggle ? "fun" : "none"}>
                  <li onClick={() => CompletedHandaler(e?.id)}>Completed</li>
                  <li onClick={() => FavouriteHandaler(e?.id)}>Favourite</li>
                  <li onClick={() => DeleteHandaler(e?.id)}>Delete</li>
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
