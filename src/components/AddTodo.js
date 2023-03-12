// importing all the required hooks
import React, { useEffect, useRef } from "react";

//importing css
import Styles from "../css/addTodo.module.css";

// creating a component for adding a new Task
const AddTodo = (props) => {
  const { handleTodoAdd, isEdit, handleTodoUpdate } = props;

  // using useRef hook for inputs
  const title = useRef();

  // using useEffect hook for checking whether we are in editing stage or not
  useEffect(() => {
    title.current.value = isEdit.edit ? isEdit.task.title : "";
  }, [isEdit]);

  return (
    // creating a container for the form
    <div className={Styles.taskContainer}>
      {/* creating up a form  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTodoAdd(title.current.value);
          title.current.value = "";
        }}
      >
        <input
          ref={title}
          type="text"
          required
          placeholder="what do you want to do today.."
        />

        {/* checking for editing state or not */}
        {props.isEdit.edit ? (
          <button
            type="button"
            onClick={() => {
              const task = isEdit.task;
              task.title = title.current.value;
              handleTodoUpdate(task, false);
            }}
          >
            Save
          </button>
        ) : (
          <button type="submit">ADD TODO</button>
        )}
      </form>
    </div>
  );
};

export default AddTodo;
