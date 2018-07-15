import React, {Component} from "react";
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {title: ''},
            modules: [
            {title: 'Module 1 - jQuery', id:123},
            {title: 'Module 2 - React', id:123},
            {title: 'Module 3 - Redux', id:123},
            {title: 'Module 4 - Angular', id:123},
            {title: 'Module 5 - Node.js', id:123},
            {title: 'Module 6 - MongoDB', id:123},
        ]
    };
        this.titleChanged = this.titleChanged.bind(this);
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title:event.target.value}});
    }

    renderListOfModules() {
        let modules = this.state.modules.map(function(module) {
                return <ModuleListItem title={module.title} key={module.id}/>
            });
        return modules;
    }

    render() {
        return (
            <div>
                <input className="form-control" placeholder="title"/>

                <input onChange={this.titleChanged}/>

                <button className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}