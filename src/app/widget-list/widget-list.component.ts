import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../services/widget.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-widget-list',
    templateUrl: './widget-list.component.html',
    styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

    constructor(private service: WidgetService,
                private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
            this.lessonId = params['lessonId'];
        });
        this.route.params.subscribe(params => {
            this.topicId = params['topicId'];
            this.getWidgets();
        });
    }

    lessonId;
    topicId;
    widgets = [];

    ngOnInit() {
    }

    getWidgets() {
        this.service.findWidgetsForLessonTopic(this.lessonId, this.topicId)
            .then(widgets => {
                this.widgets = widgets;
            });
    }

}
