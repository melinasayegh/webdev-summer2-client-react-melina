import React, {Component} from "react";
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import CourseService from '../services/CourseService';

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            course: {title: ''},
            module: {title: 'New Module'},
            modules: [],
            selectedModule: null
    };
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
    }

    setModules = (modules) => {
        this.setState({modules: modules})
    }

    selectModule = (moduleId) => {
        this.state.selectModule = moduleId;
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setCourse = (course) => {
        this.setState({course: course});
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findCourseById(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    titleChanged = (event) => {
        console.log(event.target.value);
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
        return this.moduleService
            .findModuleById(moduleId)
    };

    renderListOfModules = () => {

        let modules = null;

        if(this.state) {
            modules = this.state.modules.map((module) =>
                <ModuleListItem clicked={this.handleClick()}
                                module={module}
                                key={module.id}
                                editModule={this.editModule}
                                deleteModule={this.deleteModule}/>
            );
        }
        return modules;
    };

    handleClick = (event) => {
        console.log("change color");
    };

    createModule = () => {
        console.log(this.state.title);
        console.log(this.state.modules);


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
        let module = this.findModuleById(moduleId);
        this.setState({selectedModule: module})
        console.log("selected module: " + this.state.selectedModule.title)
    };

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    render() {
        return (
            <div>

                <div>
                    <input className="form-control"
                           onChange={this.titleChanged}
                           placeholder="title"/>

                    <button className="btn btn-success btn-block fa fa-plus"
                            onClick={this.createModule}>
                    </button>
                </div>

                <br/>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}