import React, {Component} from "react";

// make this stateless
export default class ModuleListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}

                <span className="pull-right">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-pencil"></i>
                </span>

            </li>
        );
    }
}