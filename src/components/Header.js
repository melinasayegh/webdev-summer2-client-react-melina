import React, {Component} from "react";
import '../css/style.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <a className="navbar-brand" href="/">WhiteBoard</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/course">Courses</a>
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

/*
<div className="container-fullwidth">
    <nav className="navbar navbar-expand-sm navbar-light bg-light navbar-fixed-top">

        <a className="navbar-brand" href="/">WhiteBoard</a>

        <button className="navbar-toggler" type="button"
                onClick="isCollapsed = !isCollapsed"
                data-toggle=".navbar collapse"
                data-target=".navbarWhiteboard">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarWhiteboard"
             uib-collapse="isCollapsed">
            <ul class="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/course">Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/enrollment">Enrollments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/section">Sections</a>
                </li>
            </ul>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Log Out</a>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
*/