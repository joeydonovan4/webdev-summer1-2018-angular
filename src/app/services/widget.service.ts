export class WidgetService {
    URI = 'http://localhost:8080/api/lessons/LESSON_ID/topics/TOPIC_ID/widgets';

    findWidgetsForLessonTopic(lessonId, topicId) {
        return fetch(this.URI.replace('LESSON_ID', lessonId).replace('TOPIC_ID', topicId))
            .then(response => response.json());
    }
}