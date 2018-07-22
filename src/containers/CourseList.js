import React from 'react';
import CourseService from '../services/CourseService.js';
import CourseRow from './CourseList.js';

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};

        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);

    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    titleChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            newCourse: {title: event.target.value}
        })
    };

    createCourse = () => {
        this.courseService.createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    };

    courseRows() {
        return (
            <tr><td>Course Row</td></tr>
        )
    }

    renderCourseRows() {
        let courses = null;

        console.log("render coruse rows")
        console.log(this.state)
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      course={course}/>
                }
            )
        }
        return (courses)
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className = "table">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th><input className="form-control"
                                   onChange={this.titleChanged}/></th>
                        <th><button className="btn btn-primary"
                                    onClick={this.createCourse}>Add</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
