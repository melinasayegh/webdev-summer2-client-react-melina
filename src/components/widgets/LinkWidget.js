import React from 'react';

export const LinkWidget = ({widget, updateWidget}) => {
    let text;
    let href;

    return(
        <div>
            <h3>Link Widget</h3>
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

            <h4>Preview</h4>

        </div>
    )
};