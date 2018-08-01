import React, {Component} from "react";
import '../css/style.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <a className="navbar-brand" href="/">WhiteBoard</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">Courses</a>
                            </li>
                        </ul>
                        <input className="form-control col-sm-3"
                               type="search"
                               placeholder="Search here..."
                               aria-label="Search"/>
                        <button className="btn btn-light my-2 my-sm-0" type="submit">
                            Search
                        </button>

                    </div>
                </nav>
            </div>
        )
    }
}
