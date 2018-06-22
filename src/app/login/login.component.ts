import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) { }

    username;
    password;

    login(username, password) {
        this.userService.login(username, password)
            .then(response => {
                if (!response.ok) {
                    response.json().then(errorMsg => {
                        console.log(errorMsg.error);
                    })
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
