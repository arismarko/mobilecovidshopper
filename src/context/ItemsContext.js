import React from 'react';
import createDataContext from './createDataContext';

import itemsReducer from './reducers/items.reducer';

const addItem = dispatch => {
    return async (item) => {
        dispatch({type: 'add_item', payload: item});
    }
}

export const { Context, Provider } = createDataContext(
    itemsReducer, 
    { addItem },
    []
);