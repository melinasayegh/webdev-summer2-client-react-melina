import React from 'react';

const WidgetType1 = ({widget, updateWidget}) => {

    let widgetType;

    return (
        <div>
            <h3>Widget Type 1: {widget.title}</h3>

            <select className="form-control col-4"
                    ref={node => widgetType = node}
                    onChange={() => {

                        let w = {
                            id: widget.id,
                            widgetType: widgetType.value
                        };
                        updateWidget(w);
                    }}>
                <option value="">Select Widget Type -- </option>
                <option value="WT1">Widget Type 1 </option>
                <option value="WT2">Widget Type 2 </option>
                <option value="WT3">Widget Type 3 </option>
            </select>

        </div>
    )
};




export default WidgetType1