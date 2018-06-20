export class UserService {
    createUser(user) {
        return fetch('http://localhost:4000/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    findUserById(id) {
        return fetch('http://localhost:4000/api/users/' + id);
    }

    login(username, password) {
        return fetch('http://localhost:4000/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        });
    }
}