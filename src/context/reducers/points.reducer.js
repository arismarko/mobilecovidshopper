const pointsReducer = (state, action) => {
    switch (action.type) {
        case 'get_points':
            return action.payload
        case 'initiliase': 
            return []
        default:
            return state;
    }
}

export default pointsReducer;