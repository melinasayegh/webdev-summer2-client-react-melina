import React from 'react';

import WidgetType1 from '../../components/widgets/WidgetType1';
import WidgetType2 from '../../components/widgets/WidgetType2';
import WidgetType3 from '../../components/widgets/WidgetType3';
import HeadingWidget from '../../components/widgets/HeadingWidget';
import {ListWidget} from "../../components/widgets/ListWidget";
import {YouTubeWidget} from "../../components/widgets/YouTubeWidget";

import '../../css/widgets.css';
import {LinkWidget} from "../../components/widgets/LinkWidget";


const WidgetListComponent = ({widgets, deleteWidget ,createWidget, updateWidget, saveWidgets}) => {

    let widgetTitle;
    let widgetType;


    return (
        <div className="widgetList">

            <button onClick={saveWidgets}
                    className="btn btn-primary float-right">Save</button>


            <h2>Widget List</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <span>
                        <input className="form-control col-4"
                                ref={(node) => {widgetTitle = node}}/>

                        <select className="form-control col-4"
                                ref={node => widgetType = node}>
                            <option value="">Select Widget Type --</option>
                            <option value="HEADING">Heading</option>
                            <option value="LINK">Link</option>
                            <option value="IMAGE">Image</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="YOUTUBE">YouTube</option>
                        </select>

                        <button className="btn btn-success btn-sm col-xs-2 btn-group"
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
                        {widget.title}: ({widget.id}) - type: {widget.widgetType}


                        <div className={""}>
                            <button className="btn btn-warning btn-sm btn-group"
                                    onClick={() => deleteWidget(widget.id)}>
                                <i className="fa fa-arrow-up" aria-hidden="true"/>
                            </button>
                            <button className="btn btn-warning btn-sm col-xs-1 btn-group"
                                    onClick={() => deleteWidget(widget.id)}>
                                <i className="fa fa-arrow-down" aria-hidden="true"/>
                            </button>
                            <select className="form-control col-2"
                                    ref={node => widgetType = node}
                                    onChange={() => {

                                        let w = {
                                            id: widget.id,
                                            widgetType: widgetType.value
                                        };
                                        updateWidget(w);
                                    }}>
                                <option value="">Select Widget Type --</option>
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
                        </div>


                        <div>
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'IMAGE' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'PARAGRAPH' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
};

export default WidgetListComponent;