import styles from "../css/todo.module.css";

import { fetchTodo, addTodo, deleteTodo, updateTodo } from "../api";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function Todo() {
  // State variales - Loading State, TODO state and Editing State

  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [editingMode, setEditingMode] = useState({
    edit: false,
    task: {},
  });

  const userID = 1;

  //handle TODO Completion
  const handleTodoCompletion = (task) => {
    const index = todo.findIndex((elem) => {
      return elem.id === task.id;
    });

    setTodo((prev) => {
      prev[index].completed = true;
      return [...prev];
    });
  };

  //handle TODO addition
  const handleAddTodo = async (title) => {
    const data = await addTodo(title, userID);

    if (data.success) {
      setTodo([data.data, ...todo]);
    }
  };

  //handle TODO update
  const handleTodoUpdate = async (task, requested) => {
    if (requested) {
      setEditingMode({
        edit: true,
        task,
      });

      return;
    }
    const data = await updateTodo(title);

    setEditingMode({
      edit: false,
      task: {},
    });
  };

  //handle TODO delete
  const handleTodoDelete = async (id) => {
    const result = deleteTodo(id);

    if (result.success) {
      const newTodo = todo.filter((data) => {
        return data.id !== id;
      });

      setTodo(newTodo);
    }
  };

  //fetching all TODO's - USE EFFECT HOOK
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await fetchTodo();

      if (data.success) {
        setTodo(data.data);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Todo List</h3>

      <TodoList />
    </div>
  );
}

export default Todo;
