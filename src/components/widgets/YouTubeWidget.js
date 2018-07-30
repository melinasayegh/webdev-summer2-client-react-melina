import React from 'react';

export const YouTubeWidget = ({widget, updateWidget}) => {

    let src;

    return (
        <div>
            <h3>YouTube Widget</h3>
            <label htmlFor="UML">YouTube Link</label>
            <input id="URL"
                   ref={node => src = node}
                   placeholder="https://youtu.be/wA_whMl_psA"
                   onChange={() => {

                       widget.src = src.value.split('/')[3];
                       updateWidget(widget);
                   }}
                   className="form-control"/>

            <h4>Preview</h4>
            <label htmlFor="video">YouTube Video</label>
            <iframe id="video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${widget.src}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen>

            </iframe>
        </div>

    )
};