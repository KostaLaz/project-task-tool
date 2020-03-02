import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS } from "./types";

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
