import React, {Component} from "react";
import { Link } from 'react-router-dom';

import "../../css/modules.css";
import "../../css/style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class ModuleListItem extends Component {
    render() {

        return (
            <li className={(this.props.isSelected(this.props.module.id) ? 'list-group-item active' : 'list-group-item')}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}
                      onClick={() =>  this.props.editModule(this.props.module.id)}
                      className={(this.props.isSelected(this.props.module.id) ? 'module-link active' : 'module-link')}>
                    {this.props.module.title}
                </Link>
                    <button className="btn btn-sm col-xs-1 btn-group pull-right module-btn"
                            onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this module?')) {
                                    this.props.deleteModule(this.props.module.id)
                                }}}>
                        <i className="fa fa-times"/>
                    </button>
            </li>
        );
    }
}