import React, {Component} from "react";
import LessonList from "./LessonList"

import '../css/style.css'

export default class ModuleEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            moduleTitle: 'New Module'};
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setModuleTitle(this.props.moduleTitle);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setModuleTitle(newProps.moduleTitle);
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId})
    };

    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId})
    };

    setModuleTitle = (moduleTitle) => {
        this.setState({moduleTitle: moduleTitle})
    };

    render() {
        return(

            <div className="col-sm-12 col-md-8 col-lg-8">
                <h2>Module Editor</h2>
                <p className="pEdit">Editing Module: {this.state.moduleTitle}</p>
                <h3 className="module-heading">Lessons</h3>

                <div>
                    <LessonList moduleId={this.state.moduleId}
                                courseId={this.state.courseId}/>
                </div>
            </div>
        );
    }
}