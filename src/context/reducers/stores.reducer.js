const storesReducer = (state, action) => {
    switch (action.type) {
        case 'get_stores':
            return action.payload
        default:
            return state;
    }
}

export default storesReducer;