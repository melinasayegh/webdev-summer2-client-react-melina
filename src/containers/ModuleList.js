import React, {Component} from "react";
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import CourseService from '../services/CourseService';
import ModuleEditor from './ModuleEditor.js';
import {BrowserRouter as Router} from 'react-router-dom'

import '../css/style.css'


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
            selectedModuleTitle: 'No Module Selected'
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
        this.findCourseById(newProps.courseId)
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

    isSelected = () => {
        console.log("selected?")
        if (this.state.selectedModuleId === this.state.module.id)  {
            return("bg-primary");
        } else {
            return("bg-secondary");
        }
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
            .then(() => this.isSelected());
    };

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    render() {
        console.log("selectedmodule?" +this.state.selectedModuleId)
        return (
            <Router>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
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

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2>Module Editor</h2>
                        <p className="pEdit">Editing Module: {this.state.selectedModuleTitle}</p>
                        <h3 className="module-heading">Lessons</h3>

                        <ModuleEditor courseId={this.state.courseId}
                                      moduleId={this.state.selectedModuleId}/>
                    </div>
                </div>
            </Router>
        );
    }
}