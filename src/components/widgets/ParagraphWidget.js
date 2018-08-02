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

                <hr className="half-rule"/>
                <h4>Preview: </h4>
                <hr className="half-rule"/>

            </div>

            <div className="preview-mode">

                <p>{widget.title}</p>
                <hr className="half-rule"/>

                <p>
                    {widget.text}
                </p>
            </div>
        </div>
    )
};