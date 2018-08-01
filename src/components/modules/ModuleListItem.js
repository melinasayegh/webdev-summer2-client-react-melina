import React, {Component} from "react";
import { Link } from 'react-router-dom';

import "../../css/modules.css";
import "../../css/style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class ModuleListItem extends Component {
    render() {

        return (
            <li className={(this.props.isSelected(this.props.module.id)
                            ? 'list-group-item active' : 'list-group-item')}>
                <Link to={(this.props.isSelected(this.props.module.id)
                          ? `/course/${this.props.courseId}/module/` :
                            `/course/${this.props.courseId}/module/${this.props.module.id}/lesson`
                          )}


                      onClick={() =>  this.props.editModule(this.props.module.id)}
                      className={(this.props.isSelected(this.props.module.id)
                            ? 'module-link active' : 'module-link')}>
                    {this.props.module.title}
                </Link>
                <button className={(this.props.isSelected(this.props.module.id)
                    ? 'btn delete-module btn-sm col-xs-1 btn-group pull-right module-btn active'
                    : 'btn delete-module btn-sm col-xs-1 btn-group pull-right module-btn')}
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this module?')) {
                                this.props.deleteModule(this.props.module.id)
                            }}}>
                    <i className={(this.props.isSelected(this.props.module.id)
                                    ? 'fa fa-times icon-delete active' : 'fa fa-times icon-delete')}/>
                </button>
            </li>
        );
    }
}