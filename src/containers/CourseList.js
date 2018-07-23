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

    /*
    ownerChanged = (event) => {
        this.setState({
            newCourse: {title: event.target.value}
        })
    };
*/

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

    renderCourseRows = () => {

        let courses = null;

        console.log("render course rows");
        console.log(this.state.courses);


        if(this.state) {
            courses = this.state.courses.map((course) =>
                    <CourseRow key={course.id} course={course}
                               deleteCourse={this.deleteCourse}
                               editCourse={this.editCourse}/>
            );
        }
        return (courses);
    };


    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className = "table">
                    <thead>
                    <tr>
                        <th/>
                        <th>
                            <input className="form-control"
                                   placeholder="Title"
                                   onChange={this.titleChanged}/>
                        </th>
                        <th>
                            <input className="form-control"
                                   placeholder="Owner"
                                   onChange={this.ownerChanged}/>
                        </th>
                        <th>
                            <button className="btn btn-success"
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
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderCourseRows}
                    </tbody>
                </table>
            </div>
        )
    }
}
