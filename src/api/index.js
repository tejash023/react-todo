/*
 * API TO FETCH TODOS
 * fetchTodo() - GET - TO FETCH ALL THE TODOS WITH A GIVEN USER ID
 * addTodo() - POST - TO ADD TODO'S
 * updateTodo() - PATCH - TO EDIT THE SELECTED TODO
 * deleteTodo() - DELETE - TO DELETE THE SELECTED TODO
 */

//storing api url into a variable
const URL = "https://jsonplaceholder.typicode.com/todos";

// fetching all the todo's
export const fetchTodo = async () => {
  let data = [];
  try {
    const response = await fetch(URL + "?userId=1");
    data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//adding the data in the todo's
export const addTodo = async (title, userID) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        title,
        userID,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};

//updating todos
export const updateTodo = async (task) => {
  try {
    const response = await fetch(url + `/${task - id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};

//delete todo
const deleteTodo = async (id) => {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
};

/* Content-type: application/json; charset=utf-8 designates the content to be in JSON format, encoded in the UTF-8 character encoding. */
