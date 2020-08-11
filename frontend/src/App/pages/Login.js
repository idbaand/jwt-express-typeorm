import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import {isEmail} from "validator";
import authService from '../services/auth.service';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        }
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "", loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0 ) {
            authService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage = (error.response && error.response.data 
                        && error.response.data.message) || error.message || error.toString();
                    
                        this.setState({
                            loading: false, message: resMessage
                        });
                }
            )
        } else {
            this.setState({ loading: false})
        }
    }

    render(){
        return (
            <div className="col-md-12">
                <div className="card card-container">
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img" className="profile-img-card"
                    />
                <Form
                    onSubmit = {this.handleLogin}
                    ref={c => this.form = c}
                    >
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <Input type="email" className="form-control" placeholder="Enter email" 
                            validations={[required, email]} onChange={this.onChangeUsername} value={this.state.username}
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Input type="password" className="form-control" placeholder="Enter password" 
                            validations={[required]} onChange={this.onChangePassword} value={this.state.password}
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                       
                    
                        <button type="submit" className="btn btn-primary btn-block" disabled={this.state.loading}>
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}

                            
                            <span>Login</span>
                        </button>
                    </div>

                    {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton 
                    style={{display: "none"}} ref={c => this.checkBtn = c}
                    />

                </Form>
                </div>
            </div>
        )
    }
}