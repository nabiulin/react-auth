import React, { Component } from 'react';
import '../assets/css/login.css';

class Login extends Component {
    login (event) {
        event.preventDefault();
        const user = {
            name: this.username,
            password: this.password
        };
    }

    render () {
        return (
            <form onSubmit={(e) => this.login(e)} action="/">
                <div className="login">
                    <div className="row">
                        <div className="col-2">
                            Login:
                        </div>
                        <div className="col-10">
                            <input ref={(input) => this.username = input} type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            Password:
                        </div>
                        <div className="col-10">
                            <input ref={(input) => this.password = input} type="password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login