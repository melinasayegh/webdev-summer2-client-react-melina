import React from 'react';

import '../../css/widgets.css';

export const ParagraphWidget = ({widget, updateWidget, isPreview}) => {

    let pText;

    return(
        <div>
            <div className={(isPreview ? 'hide-edit' : 'edit-mode')}>
                <label htmlFor="p">Paragraph Text</label>
                <textarea id="p"
                          placeholder="Enter paragraph text."
                          className="form-control"
                          ref={node => pText = node}
                          onChange={() => {
                              widget.text = pText.value;
                              updateWidget(widget)
                          }}
                          value={widget.text}>
                </textarea>
            </div>

            <div className="preview-mode">
                <hr className="half-rule"/>
                <h4>Preview: </h4>
                <hr className="half-rule"/>

                <p>{widget.title}</p>
                <hr className="half-rule"/>

                <p>
                    {widget.text}
                </p>
            </div>
        </div>
    )
};