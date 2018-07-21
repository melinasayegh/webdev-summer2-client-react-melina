import React from 'react';
import CourseService from './services/CourseService.js';
import CourseRow from './CourseList.js';

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};

        this.courseRows = this.courseRows.bind(this);
    }

    formChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            newCourse: {title: event.target.value}
        })
    };

    createCourse = () => {
        //this.state.courses.push(this.state.newCourse);

        this.courseService.createCourse(this.state.newCourse)
            .then((course) => console.log(course));
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
                            <th><input className="form-constrol"
                                       onChange={this.formChanged}
                                       onClick={this.createCourse}/></th>
                            <th><button className="btn btn-primary">Add</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map((index, course) =>
                            <CourseRow key={index} course={course}/>)}
                    </tbody>
                </table>
            </div>
        )
    }

    courseRows() {
        return (
            <tr><td>Course Row</td></tr>
        )
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
}
