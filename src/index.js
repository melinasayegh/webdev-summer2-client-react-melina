import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class ModuleListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
            </li>
        )
    }
}

class ModuleList extends React.Component {
    render() {
        return (
            <div>
                <h1>Module List</h1>
                <ul className="list-group">
                    <ModuleListItem title="Module 1"/>
                    <ModuleListItem title="Module 2"/>
                    <ModuleListItem title="Module 3"/>
                    <ModuleListItem title="Module 4"/>
                    <ModuleListItem title="Module 5"/>
                </ul>
            </div>
        )
    }
}

class CourseCard extends React.Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Card text.</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        )
    }
}

class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Whiteboard</h1>

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