import React, {Component} from "react";
import LessonList from "./LessonList"

import '../css/style.css'
import ModuleService from "../services/ModuleService";

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
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId})
    };

    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId})
    };

    render() {
        return(

            <div>
                <LessonList moduleId={this.state.moduleId}
                            courseId={this.state.courseId}/>
            </div>

        );
    }
}