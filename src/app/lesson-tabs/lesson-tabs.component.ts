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
        this.route.children[0].params.subscribe(params => {
            this.activeLessonId = params['lessonId'];
        });
        this.route.params.subscribe(params => {
            this.moduleId = params['moduleId'];
            this.getLessons();
        });
    }

    courseId;
    moduleId;
    activeLessonId;
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
