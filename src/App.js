import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";

class App extends Component {
    render() {
        const {dispatch, isAuthenticated, errorMessage} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Login
                        isAuthenticated={isAuthenticated}
                        errorMessage={errorMessage}
                        dispatch={dispatch}
                    />
                </div>
            </div>
        );
    }
}

export default App;
