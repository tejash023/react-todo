import styles from "../css/todo.module.css";

function TodoInput() {
  return (
    <div className={styles.todoinput}>
      <input />
      <button>Add</button>
    </div>
  );
}

export default TodoInput;
