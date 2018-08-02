import WidgetService from "../services/WidgetService";

let initialState = {

    lessonId: '',
    widgets: [],
    preview: false

       /* [
        //{title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},


        {title: 'Link Widget 1', id: 1, widgetType: 'LINK'},
        {title: 'Image Widget 1', id: 1, widgetType: 'IMAGE'},
        {title: 'Paragraph Widget 1', id: 4, widgetType: 'PARAGRAPH'},
        {title: 'List Widget 1', id: 2, widgetType: 'LIST', ordered: false, listItems: 'item1\nitem2\nitem3'},
        {title: 'You Tube 1', id: 3, widgetType: 'YOUTUBE', link:"wA_whMl_psA"}
    ]*/
};

export const widgetReducer = (state=initialState, action) => {

    this.widgetService = WidgetService.instance;

    let fromIndex;
    let toIndex;
    let widgets = [];
    let state2;
    let state3;

    switch (action.type) {

        case 'UP':

            fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);
            toIndex = fromIndex--;
            state2 = JSON.parse(JSON.stringify(state));
            // state2 = Object.assign(state);
            state2.widgets.splice(toIndex, 0, state2.widgets.splice(fromIndex, 1)[0]);
            return state2;

        case 'DOWN':

            fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);
            toIndex = fromIndex++;
            state2 = JSON.parse(JSON.stringify(state));
            // state2 = Object.assign(state);
            state2.widgets.splice(toIndex, 0, state2.widgets.splice(fromIndex, 1)[0]);
            return state2;


        case 'SAVE_LESSON_ID':

            state3 = {
                lessonId: action.lessonId,
                widgets: state.widgets
            };
            return state3;


        case 'DELETE_WIDGET':

            if (window.confirm('Are you sure you want to delete this widget?')) {
                this.widgetService.deleteWidget(action.widgetId);

                return {
                    // iterates over array and at true, current element is returned
                    widgets: state.widgets.filter(
                        // return if id is not the one just deleted
                        widget => widget.id !== action.widgetId
                    )
                }
            } else {
                return state;
            }

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
            this.widgetService.saveWidgets(state.lessonId, state.widgets);
            return state;

        case 'FIND_ALL_WIDGETS':
            return {
                widgets: action.widgets
            };

        default:
            return state
    }
};