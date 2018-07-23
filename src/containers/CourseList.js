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
            courses: [],
            selectedCourse: null
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
            owner:"Me",
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
                //owner:this.state.newCourse.owner,
                owner:"Me",
                created:newDate,
                modified:newDate};

            this.courseService.createCourse(newCourse)
                .then(()  => this.courseService.findAllCourses())
                .then(courses => this.setState({courses: courses}))
        }
    };

    editCourse = (courseId) => {

    };


    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.courseService.findAllCourses())
            .then(courses => this.setState({courses: courses}))
    };

    /*
    loadModuleList = (courseId) => {
        <div>
            <h3>Course {this.state.courseId}
            </h3>
            <ModuleList
                courseId={this.state.courseId}/>
        </div>
    };
    */
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
                        <th/>
                        <th colspan="4">
                            <input className="form-control"
                                   placeholder="Title"
                                   onChange={this.titleChanged}/>
                        </th>
                        <th>
                            <button className="btn btn-success btn-sm col-xs-2"
                                    onClick={this.createCourse}>
                                Add
                            </button>
                        </th>
                        <th/>
                        <th/>
                    </tr>
                    <tr className="spacer">
                        <td/>
                    </tr>
                    <tr>
                        <th/>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Created At</th>
                        <th>Modified At</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map((course) =>
                            <tr>
                                <td>
                                    <i className="fa fa-angle-double-right"/>
                                </td>
                                <td>
                                    <Link to="/course/${course.id}/edit">
                                        {course.title}
                                    </Link>
                                </td>

                                <td>
                                    {course.owner}
                                </td>

                                <td>
                                    {new Date(course.created).toLocaleString()}
                                </td>

                                <td>
                                    {new Date(course.modified).toLocaleString()}
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
