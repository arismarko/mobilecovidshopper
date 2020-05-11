const INITIAL_STATE = {
    items: [],
    hidden_toggle: false,
}

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_items':
            return [...state]
        case 'add_item':
            return [...state, action.payload]
        case 'initial':
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default itemsReducer;