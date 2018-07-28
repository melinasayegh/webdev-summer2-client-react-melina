import React from 'react';

const WidgetListComponent = ({widgets}) =>
    <div>
        <h2>Widget List</h2>
        <ul className="list-group">
            {widgets.map((widget, index) =>
                <li className="list-group-item" key={index}>
                    {widget.title}
                </li>)}
        </ul>

    </div>;

export default WidgetListComponent;