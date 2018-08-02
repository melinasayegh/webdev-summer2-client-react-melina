import {connect} from 'react-redux';
import WidgetListComponent from './WidgetListComponent';


const stateToPropertyMapper = state => ({
        selectedLessonId: state.selectedLessonId,
        widgets: state.widgets,
        isPreview: state.isPreview
    }
);

const dispatcherToPropertyMapper = dispatch => ({

        saveLessonId: (lid) => dispatch({
            type: 'SAVE_LESSON_ID',
            selectedLessonId: lid
        }),

        loadWidgets: (widgets) => dispatch({
            type: 'LOAD_WIDGETS',
            widgets: widgets
        }),

        deleteWidget: (wid) => dispatch({
            type: 'DELETE_WIDGET',
            widgetId: wid
        }),

        createWidget: (w) => dispatch ({
            type: 'ADD_WIDGET',
            widget: w
        }),

        updateWidget: (w) => dispatch ({
            type: 'UPDATE_WIDGET',
            widget: w
        }),

        saveWidgets: (widgets) => dispatch({
            type: 'SAVE_WIDGETS'
        }),

        togglePreview: () => dispatch({
            type: 'TOGGLE_PREVIEW'
        }),
/*

        loadAllWidgetsForLesson: (lid) => {
            this.widgetService.findAllWidgetsForLesson(lid)
                .then((widgets) =>

                    dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
        },
*/

        up: (wid) => dispatch({
            type: 'UP',
            widgetId: wid
        }),

        down: (wid) => dispatch({
            type: 'DOWN',
            widgetId: wid
        })
    }
);

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent);

export default WidgetListContainer;