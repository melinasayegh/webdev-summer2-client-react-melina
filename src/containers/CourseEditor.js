import React, {Component} from "react";
import ModuleEditor from './ModuleEditor.js';
import ModuleList from './ModuleList.js';
import CourseService from "../services/CourseService";

export default class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;

        this.state = {
            courseId: '',
            courseTitle: ''};

    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        console.log(this.state.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse = (courseId) => {
        this.setState({courseId: courseId})
           // .then(() => this.findCourseTitle(courseId));

        //console.log("id:"+this.state.courseId);
    };

    findCourseTitle = (courseId) => {
        this.courseService.findCourseById(this.state.courseId)
            .then(course => {
                this.setState({courseTitle: course.title});
            });
    };


    render() {
        return(
            <div>
                <h2>Course Editor</h2>
                <p>Editing Course {this.state.courseId}</p>
                <br/>

                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>

                    <div className="col-8">
                        <h2>Lessons</h2>
                        <ModuleEditor/>
                    </div>
                </div>
            </div>
        );
    }
}