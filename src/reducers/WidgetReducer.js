

let initialState = {
    widgets: [
        {title: 'Widget 1', id: 123, widgetType: 'WT1'},
        {title: 'Widget 2', id: 234, widgetType: 'WT2'},
        {title: 'Widget 3', id: 345, widgetType: 'WT1'},
        {title: 'Widget 4', id: 456, widgetType: 'WT3'}
    ]
};

export const widgetReducer = (state=initialState, action) => {

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                // iterates over array and at true, current element is returned
                widgets: state.widgets.filter(
                    // return if id is not the one just deleted
                    widget => widget.id !== action.widgetId
                )
            };

        case 'ADD_WIDGET':
            return {
                widgets: [
                    // take all the widgets that were already there
                    ...state.widgets,
                    action.widget
                ]
            };

        default:
            return state
    }
};