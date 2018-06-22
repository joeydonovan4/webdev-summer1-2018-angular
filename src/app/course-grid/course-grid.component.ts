import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'course-grid',
    templateUrl: './course-grid.component.html',
    styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

    constructor(private courseService: CourseService) { }

    courses = [];

    ngOnInit() {
        this.getCourses();
    }

    getCourses() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
    }
}
