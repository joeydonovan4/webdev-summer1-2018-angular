export class CourseService {
    URI = 'https://webdev-java-server.herokuapp.com/api/courses';
    
    findAllCourses() {
        return fetch(this.URI)
            .then(response => response.json());
    }

    findCourseById(courseId) {
        return fetch(this.URI + '/' + courseId)
            .then(response => response.json());
    }
}