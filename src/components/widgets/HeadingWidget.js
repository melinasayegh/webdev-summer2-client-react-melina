import React from 'react'

const HeadingWidget = ({widget, updateWidget}) => {

    let text;
    let size;

    return(
        <div>
            <label htmlFor="text">Heading Text</label>
            <input value={widget.text}
                onChange={() => {
                widget.text = text.value;
                if (widget.size === null) {
                    widget.size = 1;
                }
                updateWidget(widget)
            }}
                   ref={node => text = node}
                   className="form-control" id="text"
                   placeholder="Heading Text"/>


            <br/>

            <label htmlFor="size">Heading Size</label>
            <select value={widget.size}
                    onChange={() => {
                widget.size = size.value;
                updateWidget(widget)
            }}
                    ref={node => size = node}
                    className="form-control" id="size">
                <option value="1">Select -- </option>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
            </select>

            <hr className="half-rule"/>

            <h4>Preview</h4>
            {widget.size === '1' && <h1>{widget.text}</h1>}
            {widget.size === '2' && <h2>{widget.text}</h2>}
            {widget.size === '3' && <h3>{widget.text}</h3>}
            {widget.size === '4' && <h4>{widget.text}</h4>}
        </div>
    )
};

export default HeadingWidget;