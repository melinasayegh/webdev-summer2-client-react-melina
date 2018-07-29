import React, {Component} from "react";

import '../../css/style.css'

export default class LessonPill extends Component {
    render() {
        return(

            <h3>
                <span className="badge badge-primary">
                    {this.props.lesson.title} &nbsp;
                    <button className="btn  btn-light btn-sm col-xs-1 btn-group btn-delete-lesson"
                            onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this lesson?')) {
                                    this.props.deleteLesson(this.props.lesson.id)
                                }}}>
                        <i className="fa fa-times"/>
                    </button>
                </span>
            </h3>
        );
    }
}