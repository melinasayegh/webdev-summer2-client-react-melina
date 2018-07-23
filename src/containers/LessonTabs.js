import React, {Component} from "react";

export default class LessonTabs extends Component {
    render() {
        return(

            <div>
                <h3>LessonTabs</h3>

                <h3><span className="badge badge-primary">New</span></h3>
                <h3><span className="badge badge-primary">New</span></h3>
                <h3><span className="badge badge-primary">New</span></h3>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>

            </div>

        );
    }
}