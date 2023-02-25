import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../css/todo.module.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      setTodos(response.data);
      console.log("todos", todos);
    };

    fetchTodos();
  }, [todos]);
  return (
    <>
      <div className={styles.todoinput}>
        <input />
        <button>Add</button>
      </div>
      {todos.slice(0, 5).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
}

export default TodoList;
