import React, {Component} from "react";
import LessonTabs from './LessonTabs.js';
import ModuleList from './ModuleList.js';
import CourseService from "../services/CourseService";

export default class CourseEditor extends Component {

    constructor(props) {
        super(props)
        this.courseService = CourseService.instance;
        this.state = {
            courseId: '',
            courseTitle: ''};

        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    findCourseTitleById = (courseId) => {
        console.log(courseId);

        let course = this.courseService.findCourseById(courseId);
        console.log(course);
        return course.title;
    };


    render() {
        return(
            <div>
                <h2>Course Editor</h2>
                <p>Editing course: {this.state.courseId} Title: {this.findCourseTitleById(this.state.courseId)}
                or: {this.state.course.title}</p>
                <br/>

                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>

                    <div className="col-8">
                        <h2>Lessons</h2>
                        <LessonTabs/>
                    </div>
                </div>
            </div>
        );
    }
}