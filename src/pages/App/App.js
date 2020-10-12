import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: userService.getUser()
        };
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    Auth Template
                    <nav>
                        <NavBar
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                    </nav>
                </header>

                <Switch>
                    <Route exact path='/' render={() =>
                        <h1>Home Page</h1>
                    } />
                    <Route exact path='/show' render={() =>
                        <h1>Show Page</h1>
                    } />
                    <Route exact path='/signup' render={({ history }) =>
                        <SignupPage
                            history={history}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    } />
                    <Route exact path='/login' render={({ history }) =>
                        <LoginPage
                            handleSignupOrLogin={this.handleSignupOrLogin}
                            history={history}
                        />
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;
