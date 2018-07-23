import React from 'react';
import CourseService from '../services/CourseService.js';
import CourseRow from './CourseList.js';
import { Link } from 'react-router-dom';

import '../style.css';


export default class CourseList extends React.Component {

    constructor() {
        super();

        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {title:"New Course"},
            courses: []
        };
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
                console.log(courses);
            });

    }

    titleChanged = (event) => {
        this.setState({
            newCourse: {title: event.target.value}
        })
    };

    createCourse = () => {

        const newDate = new Date();

        const tempCourse = {
            title:"New Course",
            owner:"Default",
            created:newDate,
            modified:newDate
        };

        if (!this.state.newCourse.title) {

            this.courseService.createCourse(tempCourse)
                .then(()  => this.courseService.findAllCourses())
                .then(courses => this.setState({courses: courses}))

        } else {

            const newCourse = {
                title:this.state.newCourse.title,
                owner:"Professor",
                created:newDate,
                modified:newDate};

            this.courseService.createCourse(newCourse)
                .then(()  => this.courseService.findAllCourses())
                .then(courses => this.setState({courses: courses}))
        }
    };

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.courseService.findAllCourses())
            .then(courses => this.setState({courses: courses}))
    };

    /*
    renderCourseRows = () => {

        //let courses = null;

        console.log("render course rows");
        console.log(this.state.courses);



        //if(this.state) {
       //     courses = this.state.courses.map((course) =>
      //              <CourseRow key={course.id} course={course}/>
      //      );
       // }
        //return (courses);
    };
    */

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className = "table">
                    <thead>
                    <tr>
                        <th colspan="4">
                            <input className="form-control"
                                   onChange={this.titleChanged}/>
                        </th>
                        <th>
                            <button className="btn btn-success"
                                    onClick={this.createCourse}>
                                Add
                            </button>
                        </th>
                    </tr>
                    <tr className="spacer">
                        <td></td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Created At</th>
                        <th>Modified At</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map((course, index) =>
                            <tr>
                                <td>
                                    <Link to="/course/${course.id}">
                                        {course.title}
                                    </Link>
                                </td>

                                <td>
                                    {course.owner}
                                </td>

                                <td>
                                    {course.created}
                                </td>

                                <td>
                                    {course.modified}
                                </td>

                                <td>
                                    <div>
                                        <button className="btn btn-primary btn-sm col-xs-2 btn-group"
                                                onClick={() =>
                                                this.editCourse(course.id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger  btn-sm col-xs-2 btn-group"
                                                onClick={() =>
                                                this.deleteCourse(course.id)}>
                                            Delete
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
