import React, {Component} from "react";
import ModuleListItem from '../../components/modules/ModuleListItem';
import ModuleService from '../../services/ModuleService';
import CourseService from '../../services/CourseService';
import ModuleEditor from './ModuleEditor.js';
import {BrowserRouter as Router} from 'react-router-dom'

import "../../css/modules.css";
import '../../css/style.css'


export default class ModuleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            course: {title: ''},
            module: {title: 'New Module'},
            modules: [],
            selectedCourseTitle: 'Error',
            selectedModuleId: '',
            selectedModuleTitle: 'No Module Selected',
            isHidden: true
    };
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findCourseById(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findCourseById(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setCourse = (course) => {
        this.setState({course: course, selectedCourseTitle: course.title});
    };

    setModules = (modules) => {
        this.setState({modules: modules})
    };

    titleChanged = (event) => {
        this.setState({module: {title:event.target.value}});
    };

    findCourseById = (courseId) => {
        this.courseService.findCourseById(courseId)
            .then((course) => {this.setCourse(course)});
    };

    findAllModulesForCourse = (courseId) => {
        this.moduleService.findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    };


    findModuleById = (moduleId) => {
        return this.moduleService.findModuleById(moduleId)
    };

    renderListOfModules = () => {

        let modules = null;

        if(this.state) {
            modules = this.state.modules.map((module) =>
                <ModuleListItem courseId={this.state.courseId}
                                module={module}
                                key={module.id}
                                editModule={this.editModule}
                                deleteModule={this.deleteModule}
                                isSelected={this.isSelected}/>
            );
        }
        return modules;
    };

    createModule = () => {

        const tempModule = {title: "New Module", course: this.state.course};

        if (this.state.module.title === "") {

            this.moduleService.createModule(this.state.courseId, tempModule)
                .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}))

        } else {

            this.moduleService.createModule(this.state.courseId, this.state.module)
                .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}))
        }

    };

    editModule = (moduleId) => {
        this.findModuleById(moduleId)
            .then((module) => this.setState({selectedModuleId: module.id, selectedModuleTitle: module.title}))
            .then(() => this.toggleHidden())
            .then(() => this.renderListOfModules())
    };

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    toggleHidden = () => {
        this.setState({isHidden: !this.state.isHidden})
    };

    isSelected = (moduleId) => {
        return (!this.state.isHidden && (moduleId === this.state.selectedModuleId))
    };

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 side-nav-bg">
                        <div className="side-nav">
                            <div>
                                <h2>Course Editor</h2>
                                <p className="pEdit">Editing Course: {this.state.selectedCourseTitle}</p>
                                <h3 className="module-heading">Modules</h3>
                            </div>

                            <ul className="list-group list-group-modules list-group-flush">
                                {this.renderListOfModules()}
                            </ul>
                            <br/>

                            <div>
                                <h3>New Module:</h3>
                                <input className="form-control"
                                       onChange={this.titleChanged}
                                       placeholder="title"/>

                                <button className="btn btn-success btn-block fa fa-plus"
                                        onClick={this.createModule}>
                                </button>
                            </div>

                        </div>
                    </div>

                    {!this.state.isHidden &&
                    <ModuleEditor courseId={this.state.courseId}
                                  moduleId={this.state.selectedModuleId}
                                  moduleTitle={this.state.selectedModuleTitle}/>}

                </div>
            </Router>
        );
    }
}