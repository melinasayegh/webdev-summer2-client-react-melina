let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';

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
        console.log("find all courses fetch");
        return fetch(COURSE_API_URL)
            .then(function (response) {
                return response.json()
            })
    }

    // find course by id
    findCourseById(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId)
            .then(function (response) {
                return response
            })
    }

    // create course
    createCourse(course) {
        return fetch(COURSE_API_URL, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json()
        })
    }

    // delete this course
    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response
        })
    }

    // update this course
    updateCourse(courseId, course) {
        return fetch(COURSE_API_URL + '/' + courseId), {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
}
