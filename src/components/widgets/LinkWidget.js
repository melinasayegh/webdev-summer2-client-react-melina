import React from 'react';

export const LinkWidget = ({widget, updateWidget}) => {
    let text;
    let href;

    return(
        <div>
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


            <hr className="half-rule"/>

            <h4>Preview</h4>

        </div>
    )
};