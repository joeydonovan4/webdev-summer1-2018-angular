export class LessonService {
    URI = 'http://localhost:8080/api/courses/COURSE_ID/modules/MODULE_ID/lessons';

    findLessonsForCourseModule(courseId, moduleId) {
        return fetch(this.URI.replace('COURSE_ID', courseId).replace('MODULE_ID', moduleId))
            .then(response => response.json());
    }
}