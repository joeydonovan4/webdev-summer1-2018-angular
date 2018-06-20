export class LessonService {
    URI = 'https://webdev-java-server.herokuapp.com/api/courses/COURSE_ID/modules/MODULE_ID/lessons';

    findLessonsForCourseModule(courseId, moduleId) {
        return fetch(this.URI.replace('COURSE_ID', courseId).replace('MODULE_ID', moduleId))
            .then(response => response.json());
    }
}