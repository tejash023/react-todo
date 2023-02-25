import styles from "../css/todo.module.css";
import TodoInput from "./TodoInput";

function Todo() {
  return (
    <div className={styles.container}>
      <h3>Todo List</h3>
      <TodoInput />
    </div>
  );
}

export default Todo;
