import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
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

                  <Route path="/course"
                         component={CourseList}>
                  </Route>

                  <Route path="/course/:courseId"
                         component={CourseEditor}>
                  </Route>


                </div>
              </Router>
    </div>
    )
  }
}

