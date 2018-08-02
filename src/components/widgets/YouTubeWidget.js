import React from 'react';

import '../../css/widgets.css';

export const YouTubeWidget = ({widget, updateWidget, isPreview}) => {

    let src;

    return (
        <div>

            <div className={(isPreview ? 'hide-edit' : 'edit-mode')}>
            <label htmlFor="UML">YouTube Link</label>
            <input id="URL"
                   ref={node => src = node}
                   placeholder="https://youtu.be/wA_whMl_psA"
                   value={widget.src}
                   onChange={() => {

                       widget.src = src.value.split('/')[3];
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

                <label htmlFor="video">YouTube Video</label>
                <br/>
                <div className="video-container">
                    <iframe id="video"
                            width="560"
                            src={`https://www.youtube.com/embed/${widget.src}`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>

    )
};