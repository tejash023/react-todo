import Styles from "../css/showTodo.module.css";

function ShowTodo(props) {
  return (
    <div className={Styles.taskBox}>
      {/* mapping over all the post and rendering all the data */}
      {props.todo.map((post) => {
        return (
          <div key={post.id} className={Styles.task}>
            <h2>{post.title}</h2>
            <div className={Styles.icons}>
              <ion-icon
                onClick={() => {
                  props.updateHandler(post, true);
                }}
                name="create-outline"
              ></ion-icon>
              <ion-icon
                onClick={() => {
                  props.delete(post.id);
                }}
                name="trash-outline"
              ></ion-icon>
              <ion-icon
                onClick={() => {
                  props.completed(post);
                }}
                name={
                  post.completed
                    ? "checkmark-done-circle"
                    : "checkmark-done-circle-outline"
                }
              ></ion-icon>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodo;
