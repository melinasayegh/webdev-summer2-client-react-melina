import {connect} from 'react-redux';
import WidgetListComponent from './WidgetListComponent';


const stateToPropertyMapper = state => ({
        lessonId: this.props.lessonId,
        widgets: this.loadAllWidgetsForLesson(this.props.lessonId)
    }
);

const dispatcherToPropertyMapper = dispatch => ({

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

        saveWidgets: () => dispatch({
            type: 'SAVE_WIDGETS'
        }),

        loadAllWidgetsForLesson: () => {
            this.widgetService.findAllWidgetsForLesson()
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
        },

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