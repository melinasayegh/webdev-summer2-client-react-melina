import React, {Component} from "react";

// make this stateless
const ModuleListItemStateless = ({title}) =>
    <li className="list-group-item">
        {title}

        <span className="pull-right">
                <i className="fa fa-trash"/>
                <i className="fa fa-pencil"/>
            </span>

    </li>
;


export default class ModuleListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}

                <span className="pull-right">
                    <i className="fa fa-trash"/>
                    <i className="fa fa-pencil"/>
                </span>

            </li>
        );
    }
}