import React, { useReducer } from 'react';

import createDataContext from './createDataContext';

const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'add_item':
            return [...state, item]
        default:
            return state;
    }
}

const getStores = dispatch => {
    return async (searchTerm) => {
        const response = await jsonServer.get(`/stores?missing=${searchTerm}`);

        console.log(response);

        dispatch({type: 'get_stores', payload: response.data});
    }
}

const addStore = dispatch => {
    return async (item) => {
        const response = await jsonServer.post(`/stores`);

        console.log(response);

        dispatch({type: 'add_store', payload: response.data});
    }
}

export const { Context, Provider } = createDataContext(
    itemsReducer, 
    { getStores, addStore },
    []
);