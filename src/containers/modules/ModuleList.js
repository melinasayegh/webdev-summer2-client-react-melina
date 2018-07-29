import React, {Component} from "react";
import ModuleListItem from '../../components/modules/ModuleListItem';
import ModuleService from '../../services/ModuleService';
import CourseService from '../../services/CourseService';
import ModuleEditor from './ModuleEditor.js';
import {BrowserRouter as Router} from 'react-router-dom'

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

    setModules = (modules) => {
        this.setState({modules: modules})
    };

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setCourse = (course) => {
        this.setState({course: course, selectedCourseTitle: course.title});
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findCourseById(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findCourseById(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    titleChanged = (event) => {
        this.setState({module: {title:event.target.value}});
    };

    findAllModulesForCourse = (courseId) => {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    };

    findCourseById = (courseId) => {
        this.courseService
            .findCourseById(courseId)
            .then((course) => {this.setCourse(course)});
    };

    findModuleById = (moduleId) => {
        return this.moduleService.findModuleById(moduleId)
    };

    renderListOfModules = () => {

        let modules = null;

        if(this.state) {
            modules = this.state.modules.map((module) =>
                <ModuleListItem isSelected={this.isSelected}
                                courseId={this.state.courseId}
                                module={module}
                                key={module.id}
                                editModule={this.editModule}
                                deleteModule={this.deleteModule}/>
            );
        }
        return modules;
    };

    createModule = () => {

        const tempModule = {title: "New Module", course: this.state.course};

        if (this.state.module.title === "") {

            this.moduleService.createModule(tempModule)
                .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}))

        } else {
            var module = {title: this.state.title, course: this.state.course};
            this.state.modules.push(module);

            this.moduleService.createModule(this.props.courseId, this.state.module)
                .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
                .then(modules => this.setState({modules: modules}))
        }

    };

    editModule = (moduleId) => {
        // selected module
        this.findModuleById(moduleId)
            .then((module) => this.setState({selectedModuleId: module.id, selectedModuleTitle: module.title}))
            .then(() => this.toggleHidden());
    };

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    toggleHidden = () => {
        this.setState({isHidden: !this.state.isHidden})
    };

    render() {
        return (
            <Router>
                <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-4 side-nav">
                        <h2>Course Editor</h2>
                        <p className="pEdit">Editing Course: {this.state.selectedCourseTitle}</p>
                        <h3 className="module-heading">Modules</h3>

                        <input className="form-control"
                               onChange={this.titleChanged}
                               placeholder="title"/>

                        <button className="btn btn-success btn-block fa fa-plus"
                                onClick={this.createModule}>
                        </button>

                        <br/>

                        <ul className="list-group">
                            {this.renderListOfModules()}
                        </ul>
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