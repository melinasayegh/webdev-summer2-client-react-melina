import React, {Component} from "react";
import { Link } from 'react-router-dom';

import "../../css/modules.css";
import "../../css/style.css";

export default class ModuleListItem extends Component {
    render() {

        return (
            <li className={(this.props.isSelected(this.props.module.id) ? 'list-group-item active' : 'list-group-item')}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}
                      onClick={() =>  this.props.editModule(this.props.module.id)}>
                    {this.props.module.title}
                </Link>
                <span className="pull-right">
                    <button className="btn btn-danger  btn-sm col-xs-1 btn-group"
                            onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this module?')) {
                                    this.props.deleteModule(this.props.module.id)
                                }}}>
                        x
                    </button>
                </span>
            </li>
        );
    }
}