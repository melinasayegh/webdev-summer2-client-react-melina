import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.js';
import CourseCard from './CourseCard.js';
import ModuleList from './ModuleList.js';
import LessonTabs from './LessonTabs.js';
import TopicPills from './TopicPills.js';
import CourseEditor from './CourseEditor.js';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Whiteboard</h1>

                <div>
                    <CourseEditor/>
                </div>

                <div>
                    <TopicPills/>
                </div>

                <div>
                    <LessonTabs/>
                </div>

                <div>
                    <ModuleList/>
                </div>

                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);