import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HelloWorld from './components/hello.js';
import CourseCard from './components/CourseCard.js';
import ModuleList from './containers/ModuleList.js';
import LessonTabs from './containers/LessonTabs.js';
import TopicPills from './TopicPills.js';
import CourseEditor from './containers/CourseEditor.js';
import CourseList from './containers/CourseList.js';
import CourseManager from './containers/CourseManager.js';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';



ReactDOM.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')
);