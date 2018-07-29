import React from 'react';
import CourseService from '../../services/CourseService.js';
import CourseRow from '../../components/courses/CourseRow';

import '../../css/style.css';


export default class CourseList extends React.Component {

    constructor() {
        super();

        this.titleInput = document.getElementById('titleInput');
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {title:""},
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
        this.setState({selectedCourse: this.courseService.findCourseById(courseId)});
        //this.titleInput.val(this.state.selectedCourse.title);
    };

    updateCourse = (courseId) => {
        //this.titleInput.val(courseId);
    };


    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.courseService.findAllCourses())
            .then(courses => this.setState({courses: courses}))
    };


    renderCourseRows = () => {

        let courses = null;

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
                <h2 className="heading1">Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th/>
                        <th colSpan="4">
                            <input id="titleInput"
                                   className="form-control"
                                   placeholder="Title"
                                   onChange={this.titleChanged}
                                   value = {this.state.newCourse.title}
                            />
                        </th>
                        <th>
                            <div>
                                <button className="btn btn-success btn-sm col-xs-2 btn-group"
                                        onClick={this.createCourse}>
                                    Add
                                </button>
                                <button className="btn btn-secondary btn-sm col-xs-2 btn-group"
                                        onClick={this.updateCourse}>
                                    Update
                                </button>
                            </div>
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
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
