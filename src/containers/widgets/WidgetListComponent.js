import React from 'react';

import HeadingWidget from '../../components/widgets/HeadingWidget';
import {ListWidget} from "../../components/widgets/ListWidget";
import {YouTubeWidget} from "../../components/widgets/YouTubeWidget";
import {LinkWidget} from "../../components/widgets/LinkWidget";
import {ParagraphWidget} from "../../components/widgets/ParagraphWidget";
import {ImageWidget} from "../../components/widgets/ImageWidget";

import '../../css/widgets.css';


const WidgetListComponent = ({lessonId, widgets, deleteWidget ,createWidget,
                                 loadAllWidgetsForLesson,
                                 updateWidget, saveWidgets, up, down}) => {

    let widgetTitle;
    let widgetType;
    let lessonWidgets = loadAllWidgetsForLesson(lessonId);

    return (
        <div className="widgetList">

            <span className="row pull-right">
                <div className="material-switch">
                    <input id="switch" name="switchPreview" type="checkbox"/>
                    <label htmlFor="switch" className="label-success">Preview</label>
                </div>


                <button onClick={saveWidgets}
                        className="btn btn-primary float-right">Save</button>
            </span>


            <h2>Widget List</h2>

            <h2>{this.props.lessonId}</h2>
            <h2>{lessonId}</h2>

            <ul className="list-group widgetist">
                <div className="widgetDiv">

                    <li className="list-group-item">

                        <h4>Create a New Widget</h4>

                        <span className="row add-new-widget">

                            <input className="form-control col-4"
                                   placeholder="Widget Title"
                                   ref={(node) => {widgetTitle = node}}/>

                            <select className="form-control create-widget-selector col-4"
                                    ref={node => widgetType = node}>
                                <option value="">Select Widget Type --</option>
                                <option value="HEADING">Heading</option>
                                <option value="LINK">Link</option>
                                <option value="IMAGE">Image</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="LIST">List</option>
                                <option value="YOUTUBE">YouTube</option>
                            </select>

                            <button className="btn btn-success btn-sm-2 col-xs-2 btn-group"
                                    onClick={() => {
                                        let widget = {
                                            title: widgetTitle.value,
                                            id: (new Date()).getTime(),
                                            widgetType: widgetType.value
                                        };
                                        widgetTitle.value="";
                                        createWidget(widget)
                                    }}>
                                Add
                            </button>
                        </span>
                    </li>

                    {widgets.map((widget, index) =>

                        <li className="list-group-item" key={index}>

                            <div className="">

                                <span className="row float-right">

                                    <button className="btn btn-warning btn-sm btn-group"
                                            onClick={() => up(widget.id)}>
                                    <i className="fa fa-arrow-up" aria-hidden="true"/>
                                    </button>
                                    <button className="btn btn-warning btn-sm col-xs-1 btn-group"
                                            onClick={() => down(widget.id)}>
                                        <i className="fa fa-arrow-down" aria-hidden="true"/>
                                    </button>

                                    <select className="form-control col-4 col-sm-4 col-xs-4"
                                            ref={node => widgetType = node}
                                            value={widget.type}
                                            onChange={() => {

                                                let w = {
                                                    id: widget.id,
                                                    widgetType: widgetType.value
                                                };
                                                updateWidget(w);
                                            }}>
                                        <option value="HEADING">Heading</option>
                                        <option value="LINK">Link</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="YOUTUBE">YouTube</option>
                                    </select>

                                    <button className="btn btn-danger btn-sm col-xs-2 btn-group float-right"
                                            onClick={() => deleteWidget(widget.id)}>
                                        <i className="fa fa-times" aria-hidden="true"/>
                                    </button>
                                </span>


                                <h5 className="widget-type">{widget.widgetType} WIDGET</h5>
                                <br/>

                                <div>
                                    <label htmlFor="name">Widget Name</label>
                                    <input onChange={() => {
                                        widget.title = widgetTitle.value;
                                        updateWidget(widget)
                                    }}
                                           ref={node => widgetTitle = node}
                                           className="form-control" id="name"
                                           placeholder="Widget Name"/>
                                </div>


                            </div>

                            <br/>

                            <div>
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                                {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={updateWidget}/>}
                                {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={updateWidget}/>}
                                {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={updateWidget}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                                {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={updateWidget}/>}
                            </div>
                        </li>
                    )}
                </div>
            </ul>
        </div>
    )
};

export default WidgetListComponent;