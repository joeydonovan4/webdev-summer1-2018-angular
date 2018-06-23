export class UserService {
    createUser(user) {
        return fetch('http://localhost:4000/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
    }

    findUserById(id) {
        return fetch('http://localhost:4000/api/users/' + id, {
            credentials: 'include'
        });
    }

    login(username, password) {
        return fetch('http://localhost:4000/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({username: username, password: password})
        });
    }

    profile() {
        return fetch('http://localhost:4000/api/profile', {
            credentials: 'include'
        });
    }

    logout() {
        return fetch('http://localhost:4000/api/logout', {
            credentials: 'include'
        });
    }
}