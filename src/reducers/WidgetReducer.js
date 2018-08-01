import ModuleService from "../services/ModuleService";
import WidgetService from "../services/WidgetService";

let initialState = {
    widgets: [
        {title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},

        //{title: 'Link Widget 1', id: 1, widgetType: 'LINK'},
        //{title: 'Image Widget 1', id: 1, widgetType: 'IMAGE'},
        //{title: 'Paragraph Widget 1', id: 1, widgetType: 'PARAGRAPH'},

        {title: 'List Widget 1', id: 2, widgetType: 'LIST', ordered: false, listItems: 'item1\nitem2\nitem3'},
        {title: 'You Tube 1', id: 3, widgetType: 'YOUTUBE', ordered: false, link:"wA_whMl_psA"}
    ]
};

export const widgetReducer = (state=initialState, action) => {

    this.widgetService = WidgetService.instance;

    switch (action.type) {

        case 'DELETE_WIDGET':

            if (window.confirm('Are you sure you want to delete this widget?')) {
                widgetService.deleteWidget(action.widgetId);
            }

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
            widgetService.saveWidgets(state.widgets);
            return state;

        default:
            return state
    }
};