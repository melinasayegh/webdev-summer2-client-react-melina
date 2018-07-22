import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";


export default class CourseManager extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">

          <Header/>
          <h1>Course Manager</h1>

          <Link to="/home">WhiteBoard</Link> |
          <Link to="/course">CourseList</Link>

          <Route path="/course"
                 component={CourseList}>
          </Route>

          <Route path="/course/:courseId"
                 component={CourseEditor}>
          </Route>


        </div>
      </Router>
    )
  }
}

