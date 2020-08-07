import React, {Component} from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token: </strong>
                    {currentUser.token.substring(0, 20)} ...
                </p>
                <p>
                    <strong>Id: </strong>
                    {currentUser.id}
                </p>
                <p>
                    <strong>Username: </strong>
                    {currentUser.username}
                </p>
                <p>
                    <strong>Role: </strong>
                    {currentUser.role}
                </p>
                <p>
                    <strong>Registered at: </strong>
                    {currentUser.createdAt}
                </p>
                <p>
                    <strong>Last update: </strong>
                    {currentUser.updatedAt}
                </p>
            </div>
        )
    }
}