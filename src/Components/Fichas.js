import React, {Component} from 'react';
import TodoForm from './TodoForm';
import {todos} from '../Data/todos.json';

class Fichas extends Component{
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
      removeTodo(index){
        if(window.confirm('Are you sure wnat to delete it?')) {
          this.setState({
            todos: this.state.todos.filter((e, i) => {
              return i !== index
      
            })
          });
        }
      }

        render(){
            const todos = this.state.todos.map((todo, i) => {
                return(
                  <div className="col-md-4">
                  <div className="card mt-4">
                    <div className="card-header">
                    <h3>{todo.title}</h3>
                    <span className="badge badge-pill badge-danger ml-1">
                      {todo.priority}
                    </span>
                    </div>
                    <div className="card-body">
                    <p>{todo.description}</p>
                    <p>{todo.responsible}</p>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
                    </div>
                  </div>
                  </div>
                )
              });
              return(
                  <div>
                      {todos}
                  </div>
              );
        }
}
export default Fichas;