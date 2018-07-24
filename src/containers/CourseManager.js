import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import Header from "../components/Header";


export default class CourseManager extends Component {
    render() {
        return (

        <div>
            <Header/>

            <Router>
                    <div className="container-fluid">

                        <h1>Course Manager</h1>

                        <Switch>
                            <Route id="courseList"
                                   exact path="/course"
                                   component={CourseList}>
                            </Route>

                            <Route path="/course/:courseId/edit"
                                   component={CourseEditor}>
                            </Route>
                        </Switch>
                    </div>
            </Router>
        </div>
        )
    }
}

