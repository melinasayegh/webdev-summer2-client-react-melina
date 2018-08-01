import React, {Component} from "react";
import ModuleList from '../modules/ModuleList.js';
import CourseService from "../../services/CourseService";

import '../../css/style.css';

export default class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;

        this.state = {
            courseId: ''
        };
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse = (courseId) => {
        this.setState({courseId: courseId})
    };

    render() {
        return(
            <div>
                <div className="course-editor-div">
                    <div className="col-12">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                </div>
            </div>
        );
    }
}