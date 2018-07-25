import React, {Component} from "react";
import LessonPill from '../components/LessonPill';
import LessonService from '../services/LessonService';
import ModuleService from '../services/ModuleService'

export default class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            module: {title: ''},
            lesson: {title: ''},
            lessons: []
        };
        this.moduleService = ModuleService.instance;
        this.lessonService = LessonService.instance;
    }

    setLessons = (lessons) => {
        this.setState({lessons: lessons})
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId});
    };

    setModule = (module) => {
        this.setState({module: module});
    };

    findModuleById = (moduleId) => {
        this.moduleService
            .findModuleById(moduleId)
            .then((module) => {this.setModule(module)});
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.findModuleById(this.props.moduleId);
        this.findAllLessonsForModule(this.props.moduleId)

    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findModuleById(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId)
    }

    titleChanged = (event) => {
        this.setState({lesson: {title:event.target.value}});
    };

    findAllLessonsForModule = (courseId, moduleId) => {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    };

    renderListOfLessons = () => {

        let lessons = null;

        if(this.state.lessons) {
            lessons = this.state.lessons.map((lesson) =>
                <LessonPill lesson={lesson}
                            key={lesson.id}
                            deleteLesson={this.deleteLesson}/>
            );
        }
        return lessons;
    };

    createLesson = () => {

        if (this.state.moduleId === "") {
            (window.alert('You have not selected a module.'))
        }

        var lesson = {title: this.state.title, module: this.state.module};
        this.state.lessons.push(lesson);

        this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => this.lessonService.findAllLessonsForModule(this.state.courseId, this.state.moduleId))
            .then(lessons => this.setState({lessons: lessons}))
    };

    deleteLesson = (lessonId) => {
        this.lessonService.deleteLesson(lessonId)
            .then(() =>
                this.lessonService.findAllLessonsForModule(this.state.courseId, this.state.moduleId))
            .then(lessons => this.setState({lessons: lessons}))
    };

    render() {
        return (
            <div>

                <div>
                    <input className="form-control"
                           onChange={this.titleChanged}
                           value={this.state.lesson.title}
                           placeholder="title"/>

                    <button className="btn btn-success btn-block fa fa-plus"
                            onClick={this.createLesson}>
                    </button>
                </div>

                <br/>

                <ul className="list-group">
                    {this.renderListOfLessons()}
                </ul>
            </div>
        );
    }
}
