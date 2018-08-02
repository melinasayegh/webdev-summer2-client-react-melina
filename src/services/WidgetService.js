let _singleton = Symbol();

//const W_L_API_URL = 'http://localhost:8080/api/lesson/LID/widget';
//const WIDGET_API_URL = 'http://localhost:8080/api/widget';

const W_L_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/lesson/LID/widget';
const WIDGET_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/widget';
const W_L_API_URL_SAVE = 'https://webdev-server-java-melina.herokuapp.com/api/lesson/LID/widgets';

export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }

    findWidgetById(widgetId) {
        return fetch( WIDGET_API_URL + '/' +  widgetId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllWidgets() {
        return fetch(WIDGET_API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllWidgetsForLesson(lessonId) {
        return fetch(W_L_API_URL.replace('LID', lessonId), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    createWidget(lessonId, widget) {
        return fetch(W_L_API_URL.replace('LID', lessonId), {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json();
        })
    }

    deleteWidget(lessonId) {
        return fetch(WIDGET_API_URL + '/' + lessonId, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response; })
    }

    updateWidget(widget, widgetId) {
        return fetch(WIDGET_API_URL + '/' + widgetId, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }

    saveWidgets(lessonId, widgets) {
        return fetch(W_L_API_URL_SAVE.replace('LID', lessonId), {
            method: 'post',
            body: JSON.stringify(widgets),
            headers: { 'Content-Type': 'application/json' }
        });
    }
}