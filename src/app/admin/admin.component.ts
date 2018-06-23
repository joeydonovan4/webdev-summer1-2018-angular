import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private courseService: CourseService) { }

    courses = [];

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.courses = courses;
            });
    }

}
