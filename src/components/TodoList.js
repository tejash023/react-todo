import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../css/todo.module.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      //console.log(response.data);
      setTodos(response.data);
      setCurrentTodo(response.data);
    };

    fetchTodos();
  }, []);

  const handleTodoSubmit = () => {
    console.log("todo", todos);
    console.log("currentTodo", currentTodo);
    setTodos(currentTodo);
  };
  return (
    <>
      <div className={styles.todoinput}>
        <input onChange={(e) => setCurrentTodo(e.target.value)} />
        <button onClick={handleTodoSubmit}>Add</button>
      </div>
      <div className="todo-display">
        {todos.slice(0, 5).map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default TodoList;
