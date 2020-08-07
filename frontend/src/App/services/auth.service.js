import axios from 'axios';
import { response } from 'express';


class AuthService {
    login(username, password) {
        return axios
            .post('/auth/login', {
                username, password
            })
            .then(response => {
                if (response.data) {
                    const user = {username, token: response.data};
                    localStorage.setItem("user", JSON.stringify(user));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    //register()
}

export default new AuthService();