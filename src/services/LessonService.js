let _singleton = Symbol();

const C_M_L_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_API_URL = 'http://localhost:8080/api/lesson';


export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findLessonById(lessonId) {
        return fetch( LESSON_API_URL + '/' +  lessonId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllLessons() {
        return fetch(LESSON_API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(C_M_L_API_URL.replace('CID', courseId).replace('MID', moduleId), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(C_M_L_API_URL.replace('CID', courseId).replace('MID', moduleId), {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL + '/' + lessonId, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }

    updateLesson(lesson, lessonId) {
        return fetch(LESSON_API_URL + '/' + lessonId, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }
}