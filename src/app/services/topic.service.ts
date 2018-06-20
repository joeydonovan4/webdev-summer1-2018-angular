export class TopicService {
    URI = 'http://localhost:8080/api/lessons/LESSON_ID/topics';

    findTopicsForLesson(lessonId) {
        return fetch(this.URI.replace('LESSON_ID', lessonId))
            .then(response => response.json());
    }
}