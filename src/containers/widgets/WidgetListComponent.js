import React, {Component} from 'react';

import HeadingWidget from '../../components/widgets/HeadingWidget';
import {ListWidget} from "../../components/widgets/ListWidget";
import {YouTubeWidget} from "../../components/widgets/YouTubeWidget";
import {LinkWidget} from "../../components/widgets/LinkWidget";
import {ParagraphWidget} from "../../components/widgets/ParagraphWidget";
import {ImageWidget} from "../../components/widgets/ImageWidget";

import '../../css/widgets.css';
import WidgetService from "../../services/WidgetService";

class WidgetListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lessonId: '',
            widgets: [],
            preview: false
        };

        this.widgetService = WidgetService.instance;
    }

    componentDidMount() {
        this.setLessonId(this.props.lessonId);
        this.findWidgets(this.props.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.setLessonId(newProps.lessonId);
    }

    setLessonId = (lessonId) => {
        this.setState({lessonId: lessonId});
        this.props.saveLessonId(lessonId);
    };

    setWidgets = (widgets) => {
        this.setState({widgets: widgets});
        this.loadWidgets(widgets)
    };

    findWidgets = (lessonId) => {
        this.widgetService.findAllWidgetsForLesson(lessonId)
            .then(widgets => this.setWidgets(widgets))
    };

    loadWidgets = (widgets) => {
        this.props.loadWidgets(widgets);
    };

    render() {

        let widgetTitle = "New Widget";
        let widgetType = 'HEADING';

        return (
            <div className="container-fluid widget-container">

            <span className="row save-preview pull-right">

                <div className="preview-div">
                    <label className="switch switch-label"> Preview
                        <input id="preview-switch"
                               onClick={this.props.togglePreview}
                               type="checkbox"/>
                        <span className="slider round"/>
                    </label>
                </div>

                <button onClick={this.props.saveWidgets}
                        className="btn btn-primary save-btn float-right">Save</button>
            </span>

                <div className="outside-widget-list">

                    <h2>Widget List</h2>

                    <ul className="list-group widget-list col-12">
                        <div className="widget-div">

                            <li className="list-group-item">

                                <h4>Create a New Widget</h4>

                                <span className="row add-new-widget">

                                <input className="form-control col-4"
                                       ref={(node) => {widgetTitle = node}}
                                       placeholder="Widget Title"/>

                                <select className="form-control create-widget-selector col-4"
                                        ref={node => widgetType = node}>
                                    <option value="HEADING">Select Widget Type --</option>
                                    <option value="HEADING">Heading</option>
                                    <option value="LINK">Link</option>
                                    <option value="IMAGE">Image</option>
                                    <option value="PARAGRAPH">Paragraph</option>
                                    <option value="LIST">List</option>
                                    <option value="YOUTUBE">YouTube</option>
                                </select>

                                <button className="btn btn-success btn-sm-2 col-xs-2 btn-group"
                                        onClick={() => {
                                            let newWidget = {
                                                title: widgetTitle.value,
                                                widgetType: widgetType.value
                                            };
                                            widgetTitle.value = '';
                                            console.log("title is: " + widgetTitle.value,);
                                            console.log("type is: " + widgetType.value);
                                            this.props.createWidget(newWidget)
                                        }}>
                                    Add
                                </button>
                            </span>
                            </li>


                            {this.props.widgets.map((widget, index) =>

                                <li className="list-group-item" key={index}>

                                    <div className={(this.props.isPreview ? 'hide-edit' : 'edit-mode')}>

                                        <span className="row float-right">

                                            <button className="btn btn-warning btn-sm btn-group"
                                                    onClick={() => this.props.up(widget.id)}>
                                            <i className="fa fa-arrow-up" aria-hidden="true"/>
                                            </button>
                                            <button className="btn btn-warning btn-sm col-xs-1 btn-group"
                                                    onClick={() => this.props.down(widget.id)}>
                                                <i className="fa fa-arrow-down" aria-hidden="true"/>
                                            </button>

                                            <select className="form-control col-4 col-sm-4 col-xs-4"
                                                    ref={node => widgetType = node}
                                                    value={widget.widgetType}
                                                    onChange={() => {
                                                        let w = {
                                                            id: widget.id,
                                                            widgetType: widgetType.value
                                                        };
                                                        this.props.updateWidget(w);
                                                    }}>
                                                <option value="HEADING">Heading</option>
                                                <option value="LINK">Link</option>
                                                <option value="IMAGE">Image</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="LIST">List</option>
                                                <option value="YOUTUBE">YouTube</option>
                                            </select>

                                            <button className="btn btn-danger btn-sm col-xs-2 btn-group float-right"
                                                    onClick={() => this.props.deleteWidget(widget.id)}>
                                                <i className="fa fa-times" aria-hidden="true"/>
                                            </button>
                                        </span>


                                        <h5 className="widget-type">{widget.widgetType} WIDGET</h5>
                                        <br/>

                                        <div>
                                            <label htmlFor="name">Widget Name</label>
                                            <input value={widget.title}
                                                   onChange={() => {
                                                widget.title = widgetTitle.value;
                                                this.props.updateWidget(widget)
                                            }}
                                                   ref={node => widgetTitle = node}
                                                   className="form-control" id="name"
                                                   placeholder="Widget Name"/>
                                        </div>
                                    </div>

                                    <br/>

                                    <div>
                                        {widget.widgetType === 'HEADING'
                                        && <HeadingWidget widget={widget}
                                                          updateWidget={this.props.updateWidget}
                                                          isPreview={this.props.isPreview}/>}

                                        {widget.widgetType === 'LINK'
                                        && <LinkWidget widget={widget}
                                                       updateWidget={this.props.updateWidget}
                                                       isPreview={this.props.isPreview}/>}

                                        {widget.widgetType === 'IMAGE'
                                        && <ImageWidget widget={widget}
                                                        updateWidget={this.props.updateWidget}
                                                        isPreview={this.props.isPreview}/>}

                                        {widget.widgetType === 'PARAGRAPH'
                                        && <ParagraphWidget widget={widget}
                                                            updateWidget={this.props.updateWidget}
                                                            isPreview={this.props.isPreview}/>}

                                        {widget.widgetType === 'LIST'
                                        && <ListWidget widget={widget}
                                                       updateWidget={this.props.updateWidget}
                                                       isPreview={this.props.isPreview}/>}

                                        {widget.widgetType === 'YOUTUBE'
                                        && <YouTubeWidget widget={widget}
                                                          updateWidget={this.props.updateWidget}
                                                          isPreview={this.props.isPreview}/>}
                                    </div>
                                </li>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default WidgetListComponent;