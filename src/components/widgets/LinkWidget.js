import React from 'react';
import '../../css/widgets.css';

export const LinkWidget = ({widget, updateWidget, isPreview}) => {
    let text;
    let href;

    return(
        <div>

            <div className={(isPreview ? 'hide-edit' : 'edit-mode')}>
                <label htmlFor="linkText">Link</label>
                <textarea id="linkText"
                          ref={node => text = node}
                          placeholder="Link text."
                          className="form-control"
                          onChange={() => {
                              widget.text = text.value;
                              updateWidget(widget)
                          }}
                          value={widget.text}>
                </textarea>

                <br/>

                <label htmlFor="url">URL</label>
                <textarea ref={node => href = node}
                          className="form-control" id="url"
                          placeholder="Enter URL."
                          onChange={() => {
                              widget.href = href.value;
                              updateWidget(widget);
                          }}
                          value={widget.href}>
                </textarea>
            </div>

            <div className="preview-mode">

                <hr className="half-rule"/>
                <h4>Preview: </h4>
                <hr className="half-rule"/>

                <p>{widget.title}</p>
                <hr className="half-rule"/>

                <a href={widget.href}>{widget.text}</a>

            </div>
        </div>
    )
};