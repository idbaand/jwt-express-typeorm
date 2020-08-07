import React, { Component } from 'react';
import logo from './logo.svg';
import 'boostrap/dist/css/boostrap.min.css';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'express';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser : undefined
    }
  }

  render() {
    const {currentUser} = this.state;
    const App = () => (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
          <div className="container">
            <Link className="navbar-brand" to={"/"}>bagus.io</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/home"}>Home</Link>
                      </li>  
                  </ul>
                  {currentUser ? (
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/profile"}>Profile</Link>
                      </li>  
                    </ul>
                  ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                    </li>
                  </ul>
                  )
                  }
                
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
          <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/sign-in' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
          </div>
        </div>
      </div>
    )

    return (
      <Router>
        <App />
      </Router>
    );
  }
}

export default App;
