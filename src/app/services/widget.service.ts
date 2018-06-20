export class WidgetService {
    URI = 'https://webdev-java-server.herokuapp.com/api/lessons/LESSON_ID/topics/TOPIC_ID/widgets';

    findWidgetsForLessonTopic(lessonId, topicId) {
        return fetch(this.URI.replace('LESSON_ID', lessonId).replace('TOPIC_ID', topicId))
            .then(response => response.json());
    }
}