import React, {Component} from "react";

export default class ModuleListItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}

                <span className="pull-right">

                    <button className="btn btn-primary btn-sm col-xs-1 btn-group"
                            onClick={() =>  this.props.editModule(this.props.module.id)}>
                        Edit
                    </button>
                    <button className="btn btn-danger  btn-sm col-xs-1 btn-group"
                            onClick={() => this.props.delete(this.props.module.id)}>
                        Delete
                    </button>
                </span>

            </li>
        );
    }
}