import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'lesson-tabs',
    templateUrl: './lesson-tabs.component.html',
    styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

    constructor(private service: LessonService,
                private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
            this.courseId = params['courseId'];
        });
        this.route.params.subscribe(params => {
            this.moduleId = params['moduleId'];
            this.lessonId = params['lessonId'];
            this.getLessons();
        });
    }

    courseId;
    moduleId;
    lessonId;
    lessons = [];

    ngOnInit() {
    }

    ngOnChanges(changes) {
        console.log(changes);
    }

    getLessons() {
        this.service.findLessonsForCourseModule(this.courseId, this.moduleId)
            .then(lessons => {
                this.lessons = lessons;
            });
    }

}
