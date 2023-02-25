import styles from "../css/todo.module.css";

import TodoList from "./TodoList";

function Todo() {
  return (
    <div className={styles.container}>
      <h3>Todo List</h3>

      <TodoList />
    </div>
  );
}

export default Todo;
