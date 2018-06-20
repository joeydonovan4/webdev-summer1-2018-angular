export class TopicService {
    URI = 'https://webdev-java-server.herokuapp.com/api/lessons/LESSON_ID/topics';

    findTopicsForLesson(lessonId) {
        return fetch(this.URI.replace('LESSON_ID', lessonId))
            .then(response => response.json());
    }
}