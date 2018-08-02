import WidgetService from "../services/WidgetService";

let initialState = {
    selectedLessonId: '',
    widgets: [],
    isPreview: false
};

export const widgetReducer = (state=initialState, action) => {

    this.widgetService = WidgetService.instance;

    let fromIndex;
    let toIndex;
    let widgets = [];

    let state2;

    switch (action.type) {

        case 'UP':

            fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);

            if (fromIndex > 1) {
                toIndex = fromIndex--;
                state.widgets.splice(toIndex, 0, state.widgets.splice(fromIndex, 1)[0]);
                return state;
            } else {
                window.alert("This is already the first in the list");
                return state;
            }

        case 'DOWN':

            fromIndex = state.widgets.findIndex(widget => widget.id === action.widgetId);

            if (fromIndex < (state.widgets.length - 1)) {
                toIndex = fromIndex++;
                state.widgets.splice(toIndex, 0, state.widgets.splice(fromIndex, 1)[0]);
                return state;
            } else {
                window.alert("This is already the last in the list");
                return state;
            }


        case 'SAVE_LESSON_ID':
            state2 = {
                selectedLessonId: action.selectedLessonId,
                widgets: state.widgets,
                isPreview: state.isPreview
            };
            state = state2;
            return state;

        case 'LOAD_WIDGETS':
            widgets = this.widgetService.findAllWidgetsForLesson(state.selectedLessonId, state.widgets);

            return {
                widgets: [widgets],
                isPreview: state.isPreview
            };

        case 'DELETE_WIDGET':

            if (window.confirm('Are you sure you want to delete this widget?')) {
                this.widgetService.deleteWidget(action.widgetId);

                return {
                    // iterates over array and at true, current element is returned
                    widgets: state.widgets.filter(
                        // return if id is not the one just deleted
                        widget => widget.id !== action.widgetId
                    ),
                    isPreview: state.isPreview
                }
            } else {
                return state;
            }

        case 'ADD_WIDGET':
            this.widgetService.createWidget(state.selectedLessonId, action.widget);

            return {
                widgets: [
                    // take all the widgets that were already there
                    ...state.widgets,
                    action.widget
                ],
                isPreview: state.isPreview
            };

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return widget;
                    }
                }),
                isPreview: state.isPreview
            };

        case 'SAVE_WIDGETS':
            this.widgetService.saveWidgets(state.selectedLessonId, state.widgets);
            return state;

        case 'FIND_ALL_WIDGETS':
            return {
                widgets: action.widgets,
                isPreview: state.isPreview
            };

        case 'TOGGLE_PREVIEW':
            return {
                widgets: state.widgets,
                isPreview: !state.isPreview
            };

        default:
            return state
    }
};