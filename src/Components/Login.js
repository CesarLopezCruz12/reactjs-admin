import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
    render (){
        return(
            <div>
                <form>
                <input type="emial" name="email"
                            onChange={this.handleInput}
                            className="form-control" placeholder="Email"/>
                <input type="text" name="password"
                            onChange={this.handleInput}
                            className="form-control" placeholder="Password"/>
                </form>

                No tienes cuenta<Link to={"Navigation"}>Registrate</Link>
            </div>
        );        
    }
}
export default Login;
