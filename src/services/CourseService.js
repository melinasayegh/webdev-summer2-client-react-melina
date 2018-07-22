let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost8080/api/course';

export default class CourseService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton];
    }

    //COURSE_API_URL = 'http://localhost:8080/api/course';

    // find all courses
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    // create course
    createCourse(course) {
        return fetch(this.COURSE_API_URL, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }
}
