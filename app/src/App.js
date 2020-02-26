import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from './components/NavBar';
import ProjectBoard from './components/ProjectBoard';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import AddProjectTask from './components/projectTask/AddProjectTask';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">

     <NavBar/>
     <Route exact path="/" component={ProjectBoard}/>
     <Route exact path="/addProjectTask" component={AddProjectTask}/>
    </div> 
    </BrowserRouter>
    
    );
}
}

export default App;
