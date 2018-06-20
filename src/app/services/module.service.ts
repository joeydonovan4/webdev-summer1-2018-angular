export class ModuleService {
    URI = 'https://webdev-java-server.herokuapp.com/api/courses/COURSE_ID/modules';

    findModulesForCourse(courseId) {
        return fetch(this.URI.replace('COURSE_ID', courseId))
            .then(response => response.json());
    }
}