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

                                        <Link to="/course">View Courses</Link>
                                        <br/>
                                        <Link to="/widget">View Widgets</Link>
                                    </div>
                                </Route>

                                <Route id="courseList"
                                       exact path="/course"
                                       component={CourseList}>
                                </Route>

                                <Route path="/course/:courseId"
                                       component={CourseEditor}>
                                </Route>

                                <Route path="/course/:courseId/module/:moduleId"
                                       component={ModuleList}>
                                </Route>

                                {/*<Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                                       component={ModuleEditor}>
                                </Route>

                                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/widget/:widgetId"
                                       component={WidgetListContainer}>
                                </Route>*/}

                                <Route id="widgets"
                                       exact path="/widget"
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

