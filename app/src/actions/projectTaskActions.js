import axios from "axios";

export const addProjectTask = (project_task, history) => async => dispatch =>{
    await axios.post("localhost:8080//api/board", project_task);
    history.push("/");
};