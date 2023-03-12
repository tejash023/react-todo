//importing css
import Styles from "../css/showTodo.module.css";

const ShowTodo = (props) => {
  const { todo, handleTodoDelete, handleTodoCompletion, handleTodoUpdate } =
    props;
  return (
    <div className={Styles.taskBox}>
      {/* mapping over all the post and rendering all the data */}
      {todo.length <= 0 ? (
        <p>Add todos and it will be refeclted here</p>
      ) : (
        todo.map((post) => {
          return (
            <div key={post.id} className={Styles.task}>
              <h2>{post.title}</h2>
              <div className={Styles.icons}>
                <ion-icon
                  onClick={() => {
                    handleTodoUpdate(post, true);
                  }}
                  name="create-outline"
                ></ion-icon>
                <ion-icon
                  onClick={() => {
                    handleTodoDelete(post.id);
                  }}
                  name="trash-outline"
                ></ion-icon>
                <ion-icon
                  onClick={() => {
                    handleTodoCompletion(post);
                  }}
                  name={post.completed ? "checkbox" : "checkbox-outline"}
                ></ion-icon>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ShowTodo;
