import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import TodoForm from './Components/TodoForm';
import Fichas from './Components/Fichas';
import {todos} from './Data/todos.json';



class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render(){
   
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
  <a href="" className="text-white"> Tasks
  <span className="badge badge-pill badge-light ml-2">{this.state.todos.length} </span>
  </a> 
      </nav>
      <TodoForm onAddTodo={this.handleAddTodo}/>
      <div>
        <div >
          <Fichas/>
         
        
        </div>
      </div>
      
    </div>
  );
  }
}

export default App;
