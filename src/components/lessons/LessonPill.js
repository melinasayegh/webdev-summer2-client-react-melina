import React, {Component} from "react";
import { Link } from 'react-router-dom';

import '../../css/style.css'
//import '../../css/lessons.css'

export default class LessonPill extends Component {
    render() {
        return(
            <li className="nav-item row">
                <Link className={(this.props.isSelected(this.props.lesson.id) ? 'nav-link active' : 'nav-link')}
                      to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}/widget`}
                      onClick={() =>  this.props.selectLesson(this.props.lesson.id)}>
                    {this.props.lesson.title} &nbsp;
                </Link>

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
