import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import CourseEditor from './courses/CourseEditor'
import CourseList from "./courses/CourseList";
import ModuleList from "./modules/ModuleList";
import Header from "../components/Header";
import WidgetListContainer from "./widgets/WidgetListContainer";
import {widgetReducer} from "../reducers/WidgetReducer";

let store = createStore(widgetReducer);


export default class CourseManager extends Component {
    render() {
        return (

        <div>
            <Header/>

            <Provider store={store}>
                <Router>
                        <div className="container-fluid">
                            <Switch>


                                <Route id="courseList"
                                       exact path="/">
                                    <div>
                                        <h1 className="heading1">Course Manager</h1>
                                        <p> Welcome to the Course Manager</p>

                                        <Link to="/courses">View Courses</Link>
                                    </div>
                                </Route>

                                <Route id="courseList"
                                       exact path="/courses"
                                       component={CourseList}>
                                </Route>

                                <Route path="/course/:courseId"
                                       component={CourseEditor}>
                                </Route>

                                <Route path="/course/:courseId/module/:moduleId/"
                                       component={ModuleList}>
                                </Route>

                                <Route id="widgets"
                                       exact path="/widgets"
                                       component={WidgetListContainer}>
                                </Route>
                            </Switch>
                        </div>
                </Router>
            </Provider>
        </div>
        )
    }
}

