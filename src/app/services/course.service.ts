export class CourseService {
    URI = 'http://localhost:8080/api/courses';
    
    findAllCourses() {
        return fetch(this.URI)
            .then(response => response.json());
    }

    findCourseById(courseId) {
        return fetch(this.URI + '/' + courseId)
            .then(response => response.json());
    }
}