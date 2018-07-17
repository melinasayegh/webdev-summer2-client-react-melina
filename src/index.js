import React, {Component} from "react";
import ReactDOM from 'react-dom';
import HelloWorld from './hello.js';
import CourseCard from './CourseCard.js';
import ModuleList from './ModuleList.js';
import LessonTabs from './LessonTabs.js';
import TopicPills from './TopicPills.js';
import CourseEditor from './CourseEditor.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class WhiteBoard extends Component {
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

const Page1 = () => {
    return(<h2>Page 1</h2>)
};

const Page2 = () => {
    return(<h2>Page 2</h2>)
};

const PageParam = ({match}) => {
    return(
        <h2>PageParam {match.params.id}
        </h2>
    )
};

class PageUpdate extends Component {
    render() {
        return (
            <h2>PageUpdate
                {this.state.id}
            </h2>
        )
    }

    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.state = {id: ''}
    }

    componentDidMount() {
        this.updatePage
        (this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        this.updatePage
        (newProps.match.params.id);
    }

    updatePage(id) {
        this.setState({id: id});
    }
}


class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Link to="/hello">Hello</Link> |
                    <Link to="/page1">Page1</Link> |
                    <Link to="/page2">Page2</Link>
                    <Route path="/hello"
                           component={HelloWorld}/>
                    <Route path="/page1"
                           component={Page1}/>
                    <Route path="/page2"
                           component={Page2}/>

                    <Route path="/pageParam/:id"
                           component={PageParam}/>

                    <Route path="/pageUpdate/:id"
                    component={PageUpdate}/>
                    
                </div>

            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);