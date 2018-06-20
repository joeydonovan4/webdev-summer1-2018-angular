export class ModuleService {
    URI = 'http://localhost:8080/api/courses/COURSE_ID/modules';

    findModulesForCourse(courseId) {
        return fetch(this.URI.replace('COURSE_ID', courseId))
            .then(response => response.json());
    }
}