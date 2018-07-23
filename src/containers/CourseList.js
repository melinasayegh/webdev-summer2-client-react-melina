import React from 'react';
import CourseService from '../services/CourseService.js';
import CourseRow from './CourseList.js';
import { Link } from 'react-router-dom';


export default class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }

    componentDidMount() {
        console.log("in did mount");
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
        this.setState({
            newCourse: {title: event.target.value}
        })
    };

    createCourse = () => {
        this.courseService.createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    };


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
                        {this.state.courses.map((course, index) =>
                            <tr>
                                <td>
                                    <Link to="/course/${course.id}">
                                        {course.title}
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() =>
                                                this.deleteCourse(course.id)
                                            }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
