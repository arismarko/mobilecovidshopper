const INITIAL_STATE = {
    points: [],
    selected_point: null,
}

const pointsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_points':
            return action.payload
        default:
            return state;
    }
}

export default pointsReducer;
