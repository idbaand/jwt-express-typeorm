import axios from 'axios';


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

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    //register()
}

export default new AuthService();