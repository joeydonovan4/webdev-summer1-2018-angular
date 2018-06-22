import { Component, OnInit } from '@angular/core';
import { CourseService } from "../services/course.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-course-viewer',
    templateUrl: './course-viewer.component.html',
    styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

    constructor(private service: CourseService,
                private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.getCourse(params['courseId']);
        });
    }

    course = {};

    ngOnInit() {}

    getCourse(courseId) {
        this.service.findCourseById(courseId)
            .then(course => {
                this.course = course;
            });
    }

}
