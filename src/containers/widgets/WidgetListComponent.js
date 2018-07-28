import React from 'react';

const WidgetListComponent = ({widgets, deleteWidget}) =>
    <div>
        <h2>Widget List</h2>
        <ul className="list-group">
            {widgets.map((widget, index) =>
                <li className="list-group-item" key={index}>
                    {widget.title}:  ({widget.id})
                    <button className="btn btn-danger btn-sm col-xs-2 btn-group float-right"
                            onClick={() =>deleteWidget(widget.id)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>

    </div>;

export default WidgetListComponent;