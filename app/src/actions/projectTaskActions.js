import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASKS } from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/api/board", project_task);
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payLoad: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payLoad: error.response.data
    });
  }
};

export const getBacklog = () => async dispatch => {
  const response = await axios.get("http://localhost:8080/api/board/all");
  dispatch({
    type: GET_PROJECT_TASKS,
    payLoad: response.data
  });
};

export const deleteProjectTask = id => async dispatch =>{
  if(
    window.confirm(`You are deleting project task ${id}`)
    )
  {
  await axios.delete(`http://localhost:8080/api/board/${id}`);
  dispatch({
    type: "DELETE_PROJECT_TASK",
    payLoad: id
  });
  }
};
