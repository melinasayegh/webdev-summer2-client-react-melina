import React, {Component} from "react";
import ModuleListItem from '../components/ModuleListItem';
//import ModuleListItemStateless from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: [
            {title: 'Module 1 - jQuery'},
            {title: 'Module 2 - React'},
            {title: 'Module 3 - Redux'},
            {title: 'Module 4 - Angular'},
            {title: 'Module 5 - Node.js'},
            {title: 'Module 6 - MongoDB'},
        ]
    };
        this.moduleService = ModuleService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    /*
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }
    */

    titleChanged = (event) => {
        console.log(event.target.value);
        this.setState({module: {title:event.target.value}});
    };
/*
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }*/

    renderListOfModules = () => {
        let modules = this.state.modules.map(function (module) {
            return <ModuleListItem module={module}
                                editModue={this.editModule}
                                deleteModule={this.deleteModule(module.id)}
                                key={module.id}/>
            });
        return modules;
    };

    createModule = () => {
        console.log(this.state.title);
        console.log(this.state.modules);

        var module = {title: this.state.title};
        this.state.modules.push(module);

        this.moduleService.createModule(this.props.courseId, this.state.module);
        this.setState({"modules": this.state.modules});
    };

    deleteModule = (moduleId) => {
        this.moduleService.deleteModule(moduleId)
            .then(() => this.moduleService.findAllCourses())
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
                    {this.renderListOfModules}
                </ul>
            </div>
        );
    }
}