import React, {Component} from "react";
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello.js';
import CourseCard from './components/CourseCard.js';
import ModuleList from './containers/ModuleList.js';
import LessonTabs from './containers/LessonTabs.js';
import TopicPills from './TopicPills.js';
import CourseEditor from './containers/CourseEditor.js';
import CourseList from './containers/CourseList.js';
import CourseManager from './containers/CourseManager.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

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
                    <Route path="/whiteboard"
                           component={CourseManager}/>
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
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')
);