

let initialState = {
    widgets: [
        {title: 'Widget 1', id: 123},
        {title: 'Widget 2', id: 234},
        {title: 'Widget 3', id: 345},
        {title: 'Widget 4', id: 456}
    ]
};

export const widgetReducer = (state=initialState) => {
    return state
};