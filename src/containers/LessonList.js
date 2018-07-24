import React, {Component} from "react";
import LessonPill from '../components/LessonPill';
import LessonService from '../services/LessonService';

export default class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: []
        };
        this.lessonService = LessonService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
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

    renderListOfModules = () => {

        let modules = null;

        if(this.state) {
            modules = this.state.modules.map((module) =>
                <ModuleListItem module={module}
                                key={module.id}
                                deleteModule={this.deleteModule}/>
            );
        }
        return modules;
    };

    createModule = () => {
        console.log(this.state.title);
        console.log(this.state.modules);

        var module = {title: this.state.title};
        this.state.modules.push(module);

        this.moduleService.createModule(this.props.courseId, this.state.module)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    editModule = (moduleId) => {


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
                           value={this.state.module.title}
                           placeholder="title"/>

                    <button className="btn btn-success btn-block fa fa-plus"
                            onClick={this.createModule}>
                    </button>
                </div>

                <br/>

                <p>{this.state.title}</p>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}