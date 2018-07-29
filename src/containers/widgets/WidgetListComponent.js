import React from 'react';

const WidgetListComponent = ({widgets, deleteWidget ,createWidget}) => {

    let widgetTitle;

    return (
        <div>
            <h2>Widget List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <span>
                        <input className="form-control"
                                ref={(node) => {widgetTitle = node}}/>
                        <button className="btn btn-success btn-sm col-xs-2 btn-group"
                                onClick={() => {
                                    let widget = {
                                        title: widgetTitle.value,
                                        id: (new Date()).getTime()
                                    };
                                    createWidget(widget)
                                }}>
                            Add
                        </button>
                    </span>
                </li>

                {widgets.map((widget, index) =>
                    <li className="list-group-item" key={index}>
                        {widget.title}: ({widget.id})
                        <button className="btn btn-danger btn-sm col-xs-2 btn-group float-right"
                                onClick={() => deleteWidget(widget.id)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>

        </div>
    )
};

export default WidgetListComponent;