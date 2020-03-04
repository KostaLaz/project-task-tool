import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getProjectTask} from "../../actions/projectTaskActions";

 class UpdateProjectTask extends Component {

    constructor(){
        super();

        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(this.props.match.params+ "!!!!!!!!!!!!!!!");

        this.props.getProjectTask(id);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add /Update Project Task</h4>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="summary" 
                            value={this.state.summary}placeholder="Project Task summary" 
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={this.state.acceptanceCriteria}
                             onChange={this.onChange}></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" name="status" value={this.state.status}  onChange={this.onChange}>
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

UpdateProjectTask.propTypes = {
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    project_task: state.project_task,
    errors: state.errors
});

export default connect (mapStateToProps, {getProjectTask}) (UpdateProjectTask);