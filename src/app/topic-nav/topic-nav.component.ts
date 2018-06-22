import { Component, OnInit } from '@angular/core';
import { TopicService } from '../services/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-topic-nav',
    templateUrl: './topic-nav.component.html',
    styleUrls: ['./topic-nav.component.css']
})
export class TopicNavComponent implements OnInit {

    constructor(private service: TopicService,
                private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.lessonId = params['lessonId'];
            this.getTopics();
        });
        if (this.route.children.length > 0) {
            this.route.children[0].params.subscribe(params => {
                this.activeTopicId = params['topicId'];
            });
        }
    }

    lessonId;
    activeTopicId;
    topics = [];

    ngOnInit() {
    }

    getTopics() {
        this.service.findTopicsForLesson(this.lessonId)
            .then(topics => {
                this.topics = topics;
            });
    }

}
