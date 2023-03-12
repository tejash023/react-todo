import { fetchTodo, addTodo, deleteTodo, updateTodo } from "../api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Styles from "../css/todo.module.css";

import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";

function Todo() {
  // State variales - Loading State, TODO state and Editing State

  const [todo, setTodo] = useState([]);
  const [isEdit, setisEdit] = useState({
    edit: false,
    task: {},
  });

  const userID = 1;

  //handle TODO Completion
  const handleTodoCompletion = (task) => {
    const index = todo.findIndex((elem) => {
      return elem.id === task.id;
    });
    toast.success("Awesome!! Job done 👏");
    setTodo((prev) => {
      prev[index].completed = true;
      return [...prev];
    });
  };

  //handle TODO addition
  const handleTodoAdd = async (title) => {
    const data = await addTodo(title, userID);

    if (data.success) {
      setTodo([data.data, ...todo]);
    }
    toast.success("Woho! Todo added 🚀");
  };

  //handle TODO update
  const handleTodoUpdate = async (task, requested) => {
    if (requested) {
      setisEdit({
        edit: true,
        task,
      });

      return;
    }
    const data = await updateTodo(task);
    toast.success("Todo updated!! 👍");
    setisEdit({
      edit: false,
      task: {},
    });
  };

  //handle TODO delete
  const handleTodoDelete = async (id) => {
    const result = await deleteTodo(id);

    if (result.success) {
      const newTodo = todo.filter((data) => {
        return data.id !== id;
      });

      setTodo(newTodo);
    }

    toast.success("Todo removed!!", {
      icon: "❎",
    });
  };

  //fetching all TODO's - USE EFFECT HOOK
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await fetchTodo();

      if (data.success) {
        setTodo(data.data);
      }
    };
    const loader = fetchTodos();
    toast.promise(loader, {
      loading: "Loading",
      success: "Todo loaded",
      error: "Error when fetching",
    });
  }, []);

  return (
    <div className={Styles.container}>
      <h3>TODO LIST</h3>
      {/* {Adding task} */}
      <AddTodo
        handleTodoAdd={handleTodoAdd}
        isEdit={isEdit}
        handleTodoUpdate={handleTodoUpdate}
      />

      {todo.length <= 0 ? (
        <p>Add todos and it will be refeclted here</p>
      ) : (
        <ShowTodo
          todo={todo}
          handleTodoDelete={handleTodoDelete}
          handleTodoCompletion={handleTodoCompletion}
          handleTodoUpdate={handleTodoUpdate}
        />
      )}
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default Todo;
