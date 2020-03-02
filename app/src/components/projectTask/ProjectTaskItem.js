import React, { Component } from 'react'
import{Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteProjectTask} from "../../actions/projectTaskActions";

 class ProjectTaskItem extends Component {

    onDeleteClick(id){
        this.props.deleteProjectTask(id);
    }

    render() {
        const {project_task} = this.props;
        return (
            <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {project_task.id}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
                <a href="" className="btn btn-primary">
                    View / Update
                </a>
            
                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this, project_task.id)}>
                    Delete
                </button>
            </div>
            </div>
        )
    }
}

ProjectTaskItem.propTypes={
    deleteProjectTask: PropTypes.func.isRequired
}

export default connect(null, {deleteProjectTask}) (ProjectTaskItem);
