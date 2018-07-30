import React, {Component} from "react";

import '../../css/style.css'
//import '../../css/lessons.css'

export default class LessonPill extends Component {
    render() {
        return(
            <li className="nav-item row">
                <a className="nav-link" href="#">
                    {this.props.lesson.title} &nbsp;
                </a>
                <button className="btn btn-delete-lesson"
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this lesson?')) {
                                this.props.deleteLesson(this.props.lesson.id)
                            }}}>
                    <i className="fa fa-times"/>
                </button>
            </li>
        );
    }
}
