import React, {Component} from 'react';


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
          title: '',
          responsable: '',
          description: '',
          priority: 'low'

        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInput(e){
          const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        
        /*
        Esta funcion sirve para identifar cuantas letras o caracteres tiene la palabra      Validación
        const palabra = e.target.value;
        console.log(palabra);
        if(palabra.length > 20 ){
            alert("exediste el espacio máximo");



            console.log(e.target.value, e.target.name);
        }*/
      }
      handleSubmit(e){
            e.preventDefault();
            console.log(this.state);
            this.props.onAddTodo(this.state);
            console.log("sending....");

      }
    render (){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" name="title"
                            onChange={this.handleInput}
                            className="form-control" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="responsable" 
                            onChange={this.handleInput}
                            className="form-control" placeholder="Responsable"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="description"
                            onChange={this.handleInput}
                            className="form-control" placeholder="Description"/>
                        </div>
                        <div className="form-group">
                            <select name="priority"
                            className="form-control"
                            onChange={this.handleInput}>
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            

            </div>
        );        
    }
}
export default TodoForm;
