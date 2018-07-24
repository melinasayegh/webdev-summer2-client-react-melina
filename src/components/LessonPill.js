import React, {Component} from "react";

import '../css/style.css'

export default class LessonPill extends Component {
    render() {
        return(

            <h3>
                <span className="badge badge-primary">
                    {this.props.lesson.title}
                    <button className="btn  btn-light btn-sm col-xs-1 btn-group"
                            onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this lesson?')) {
                                    this.props.deleteLesson(this.props.lesson.id)
                                }}}>
                        x
                    </button>
                </span>

            </h3>

        );
    }
}