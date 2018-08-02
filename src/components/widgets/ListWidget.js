import React from 'react';

import '../../css/widgets.css';

export const ListWidget = ({widget, updateWidget, isPreview}) => {
    let text;
    let ordered;

    return(
        <div>

            <div className={(isPreview ? 'hide-edit' : 'edit-mode')}>
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

                <br/>

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
            </div>

            <div className="preview-mode">
                <hr className="half-rule"/>
                <h4>Preview: </h4>
                <hr className="half-rule"/>

                <p>{widget.title}</p>
                <hr className="half-rule"/>

                {!widget.ordered &&
                    <ul>
                        {() => {
                            if (widget.listItems !== "") {
                            widget.listItems.split('\n').map((item, index) =>
                                (<li key={index}>{item}</li>))}}}
                    </ul>
                }
                {widget.ordered &&
                    <ol>
                        {() => {
                            if (widget.listItems !== "") {
                                widget.listItems.split('\n').map((item, index) =>
                                    (<li key={index}>{item}</li>))}}}
                    </ol>
                }
            </div>
        </div>
    )
};