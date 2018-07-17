import React, {Component} from "react";
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title:event.target.value}});
    }

    renderListOfModules() {
        let modules = this.state.modules.map((module, i) =>
            <ModuleListItem
                title={module.title}
                key={i}/>
        );
        return modules;
    }

    createModule = () => {
        console.log(this.state.title);
        console.log(this.state.modules);
        var module = {title: this.state.title};
        this.state.modules.push(module);
        this.setState({"modules": this.state.modules})
    }

    render() {
        return (
            <div>

                <h1>Module List</h1>
                <h2>{this.state.title}</h2>

                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>

                <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>
                    <i className="fa fa-plus"></i>
                </button>

                <p>{this.state.title}</p>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}