const pointsReducer = (state, action) => {
    switch (action.type) {
        case 'get_points':
            return action.payload
        default:
            return state;
    }
}
