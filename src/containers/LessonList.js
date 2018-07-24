import React, {Component} from "react";
import LessonPill from '../components/LessonPill';
import LessonService from '../services/LessonService';

export default class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: ''},
            lessons: []
        };
        this.lessonService = LessonService.instance;
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    };

    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId});
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }


    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.moduleId)
    }

    titleChanged = (event) => {
        console.log(event.target.value);
        this.setState({module: {title:event.target.value}});
    };

    findAllLessonsForModule = (courseId, moduleId) => {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    };

    renderListOfLessons = () => {

        let lessons = null;

        if(this.state) {
            lessons = this.state.lessons.map((lesson) =>
                <LessonPill lesson={lesson}
                            key={lesson.id}
                            deleteLesson={this.deleteLesson}/>
            );
        }
        return modules;
    };

    createLesson = () => {

        var lesson = {title: this.state.title,
        module: this.state.module};
        this.state.lessons.push(lesson);

        this.lessonService.createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(() => this.moduleService.findAllModulesForCourse(this.state.courseId))
            .then(modules => this.setState({modules: modules}))
    };

    editModule = (lessonId) => {


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