import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) { }

    firstName;
    lastName;
    email;
    username;
    password;
    confirmPassword;

    register() {
        var user = {
            username: this.username,
            password: this.password,
            name: {
                firstName: this.firstName,
                lastName: this.lastName
            },
            email: this.email
        }
        this.userService.createUser(user)
            .then(response => {
                if (!response.ok) {
                    response.json().then(errorMsg => {
                        console.log(errorMsg.error);
                    });
                } else {
                    response.json().then(createdUser => {
                        this.router.navigate(['profile']);
                    });
                }
            });
    }

    ngOnInit() {
    }

}
