import React from 'react';

import '../../css/widgets.css';

export const ImageWidget = ({widget, updateWidget, isPreview}) => {

    let src;

    return (
        <div>

            <div className={(isPreview ? 'hide-edit' : 'edit-mode')}>
                <label htmlFor="link">Image Link</label>
                <input id="link"
                       ref={node => src = node}
                       placeholder="Enter Image Link"
                       value={widget.src}
                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget);
                       }}
                       className="form-control"/>
            </div>

            <div className="preview-mode">
                <hr className="half-rule"/>
                <h4>Preview: </h4>
                <hr className="half-rule"/>

                <p>{widget.title}</p>
                <hr className="half-rule"/>

                <label htmlFor="img">Image</label>
                <br/>
                <div className="img-container">
                    <img src={widget.src}/>
                </div>
            </div>
        </div>

    )
};