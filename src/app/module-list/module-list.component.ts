import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../services/module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

    constructor(private service: ModuleService,
                private route: ActivatedRoute) {
        this.route.children[0].params.subscribe(params => {
            this.activeModuleId = params['moduleId'];
        });
        this.route.params.subscribe(params => {
            this.courseId = params['courseId'];
            this.getModules();
        });
    }

    courseId;
    activeModuleId;
    modules = [];

    ngOnInit() {
    }

    getModules() {
        this.service.findModulesForCourse(this.courseId)
            .then(modules => {
                this.modules = modules;
            });
    }

}
