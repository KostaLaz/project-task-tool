import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASKS, GET_PROJECT_TASK } from "./types";

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

export const deleteProjectTask = id => async dispatch => {
  if(
    window.confirm(`You are deleting project task ${id}, this action can not be undone.`)
    )
  {
  await axios.delete(`http://localhost:8080/api/board/${id}`);
  dispatch({
    type: DELETE_PROJECT_TASKS,
    payLoad: id
  });
  }
};

export const getProjectTask = (id, history) => async dispatch => {
  try {
    console.log(id);
    const res = await axios.get(`http://localhost:8080/api/board/${id}`);
    console.log("BBBBBBB");
    console.log("GET " + GET_PROJECT_TASK);
    console.log("RES>DATA" + res.data);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  } catch (error) {
    console.log("ERR " + error)
    console.log("HIS " + history)

    history.push("/");
  }
};