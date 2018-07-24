import React, {Component} from "react";

import '../css/style.css'

export default class LessonPill extends Component {
    render() {
        return(
            <div>
                <h3><span className="badge badge-primary">{this.props.lesson.title}</span></h3>
            </div>
        );
    }
}