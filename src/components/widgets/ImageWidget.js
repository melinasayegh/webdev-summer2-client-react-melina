import React from 'react';

import '../../css/widgets.css';

export const ImageWidget = ({widget, updateWidget}) => {

    let src;

    return (
        <div>
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

            <hr className="half-rule"/>

            <h4>Preview</h4>
            <label htmlFor="img">Image</label>
            <br/>
            <div className="img-container">
                <img src={widget.src}/>
            </div>


            <img src="https://goo.gl/images/BQZF5k"/>
        </div>

    )
};