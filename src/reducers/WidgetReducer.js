
let initialState = {
    widgets: [
        {title: 'You Tube 1', id: 3, widgetType: 'YOUTUBE', ordered: false, link:"wA_whMl_psA"},
        {title: 'List Widget 1', id: 2, widgetType: 'LIST', ordered: false, listItems: 'item1\nitem2\nitem3'},
        {title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},
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

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return widget;
                    }
                })
            };

        case 'SAVE_WIDGETS':
            fetch('http://localhost:8080/api/widget', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return state;

        default:
            return state
    }
};