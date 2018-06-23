import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private service: UserService, private router: Router) { }

    id;
    firstName;
    lastName;
    email;
    username;
    password;
    admin;

    ngOnInit() {
        this.getCurrentUser();
    }

    getCurrentUser() {
        this.service.profile()
            .then(response => {
                if (response.ok) {
                    response.json().then(user => {
                        this.id = user._id;
                        this.firstName = user.name.firstName;
                        this.lastName = user.name.lastName;
                        this.email = user.email;
                        this.username = user.username;
                        this.password = user.password;
                        this.admin = user.admin;
                    });
                } else {
                    response.json().then(errorMsg => {
                        console.log(errorMsg.error);
                    });
                }
            });
    }

    logout() {
        this.service.logout()
            .then(response => {
                if (response.ok) {
                    this.router.navigate(['/login']);
                }
            })
    }
}
