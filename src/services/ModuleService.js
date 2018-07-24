let _singleton = Symbol();

const COURSE_MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_API_URL = 'http://localhost:8080/api/module';


export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    findModuleById(moduleId) {
        return fetch( MODULE_API_URL + '/' +  moduleId, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
                return response.json();
            })
    }

    findAllModules() {
        return fetch(MODULE_API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
                return response.json();
            })
    }

    findAllModulesForCourse(courseId) {
        return fetch(COURSE_MODULE_API_URL.replace('CID', courseId), {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        return fetch(COURSE_MODULE_API_URL.replace('CID', courseId), {
            method: 'POST',
            body: JSON.stringify(module),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL + '/' + moduleId, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response; })
    }

    updateModule(module, moduleId) {
        return fetch(MODULE_API_URL + '/' + moduleId, {
            method: 'PUT',
            body: JSON.stringify(module),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json(); })
    }
}