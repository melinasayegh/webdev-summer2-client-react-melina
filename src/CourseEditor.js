import React, {Component} from "react";
import LessonTabs from './LessonTabs.js';
import ModuleList from './ModuleList.js';

export default class CourseEditor extends Component {
    render() {
        return(
            <div>
                <h3>Course Editor</h3>

                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2><ModuleList/>
                    </div>
                    <div className="col-8">
                        <h2>Lessons</h2><LessonTabs/>
                    </div>
                </div>
            </div>
        );
    }
}