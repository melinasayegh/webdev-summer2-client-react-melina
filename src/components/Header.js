import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import '../style.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand" href="/">WhiteBoard</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/course">Courses</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                                </a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/module">Courses</a>
                                    <a className="dropdown-item" href="/module">Modules</a>
                                    <a className="dropdown-item" href="/lesson">Lessons</a>
                                    <div className="dropdown-divider">

                                    </div>
                                </div>
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
