import React from 'react';

export const ListWidget = ({widget, updateWidget}) => {
    let text;
    let ordered;

    return(
        <div>
            <h3>List Widget</h3>
            <label htmlFor="items">List Items</label>
            <textarea id="items"
                      ref={node => text = node}
                      placeholder="Enter one list item per line."
                      className="form-control"
                      onChange={() => {
                          widget.listItems = text.value;
                          updateWidget(widget)
                      }}
                      value={widget.listItems}>
            </textarea>

            <label htmlFor="ordered">Type of List</label>
            <select ref={node => ordered = node}
                    className="form-control" id="ordered"
                    onChange={() => {
                        widget.ordered = ordered.value;
                        updateWidget(widget);
                    }}>
                <option value="">Select -- </option>
                <option value="true">Ordered</option>
                <option value="">Unordered</option>
            </select>

            <h4>Preview</h4>
            {!widget.ordered &&
                <ul>
                    {widget.listItems.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            }
            {widget.ordered &&
            <ol>
                {widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            }
        </div>
    )
};