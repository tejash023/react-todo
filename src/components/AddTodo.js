// importing all the required hooks
import React, { useEffect, useRef } from "react";

//importing css
import Styles from "../css/addTodo.module.css";

// creating a component for adding a new Task
const AddTodo = (props) => {
  // using useRef hook for inputs
  const title = useRef();

  // using useEffect hook for checking whether we are in editing stage or not
  useEffect(() => {
    title.current.value = props.isEdit.edit ? props.isEdit.task.title : "";
  }, [props.isEdit]);
  return (
    // creating a container for the form
    <div className={Styles.taskContainer}>
      {/* creating up a form  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addtask(title.current.value);
          title.current.value = "";
        }}
      >
        <div>
          <label>Title: </label>
          <br />
          <input ref={title} type="text" required />
        </div>
        <div>
          {/* checking for editing state or not */}
          {props.isEdit.edit ? (
            <button
              type="button"
              onClick={() => {
                const task = props.isEdit.task;
                task.title = title.current.value;
                props.updateHandler(task, false);
              }}
            >
              Save
            </button>
          ) : (
            <button type="submit">ADD TASK</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
