import React, {Component} from "react";
import LessonList from "./LessonList"

import '../css/style.css'
import ModuleService from "../services/ModuleService";

export default class ModuleEditor extends Component {

    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;

        this.state = {
            courseId: '',
            moduleId: '',
            moduleTitle: ''};
    }

    componentDidMount() {
        this.selectCourse(this.props.courseId);
        this.selectModule(this.props.moduleId);
        console.log(this.state.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.courseId);
    }

    selectCourse = (courseId) => {
        this.setState({courseId: courseId})
    };

    selectModule = (moduleId) => {
        this.setState({moduleId: moduleId})
    };

    findModuleTitle = (moduleId) => {
        this.courseService.findModuleById(this.state.moduleId)
            .then(module => {
                this.setState({moduleTitle: module.title});
            });
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