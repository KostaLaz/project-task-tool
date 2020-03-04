import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from './components/NavBar';
import ProjectBoard from './components/ProjectBoard';
import {Route, BrowserRouter} from 'react-router-dom';
import AddProjectTask from './components/projectTask/AddProjectTask';
import {Provider} from 'react-redux';
import store from './store';
import UpdateProjectTask from './components/projectTask/UpdateProjectTask';


class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">

     <NavBar/>

     <Route exact path="/" component={ProjectBoard}/>

     <Route exact path="/addProjectTask" component={AddProjectTask}/>

     <Route exact path="/updateProjectTask/:id" component={UpdateProjectTask} />
     
    </div> 
    </BrowserRouter>
    </Provider>
    
    );
}
}

export default App;
